import { CriacaoAgendaProvider } from './../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { Observable } from 'rxjs';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';
import { JwtHelper } from 'angular2-jwt';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { ListaServiceContratadosClientService } from './lista-service-contratados-client.service';
import { ServiceContratados } from '../lista-service-contratados/lista-service-contratados';
import { Input, Component, OnInit } from '@angular/core';
import { PessoaFisica } from '../pessoa/pessoa-fisica';
import { MatTabChangeEvent } from '@angular/material';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-service-contratados-client',
  templateUrl: './lista-service-contratados-client.component.html',
  styleUrls: ['./lista-service-contratados-client.component.css']
})
export class ListaServiceContratadosClientComponent implements OnInit {

  @Input() lstServiceContratados: ServiceContratados[] = [];
  varServiceContratados: ServiceContratados;
  jwtHelper: JwtHelper = new JwtHelper();
  varPetClient: PessoaFisica = new PessoaFisica();
  serviceListaServiceContratadosClientService: ListaServiceContratadosClientService;
  @Input() datas: string[] = [];
  listaPorTab: ServiceContratados[] = [];
  idAgendamento: string;
  id;
  observacaoAtendimento: ServiceContratados = new ServiceContratados;

  // const objLogin;
  constructor(private serviceServiceContratados: ListaServiceContratadosClientService) {
  }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);


    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetClient = retorno;
      this.id = JSON.stringify(this.varPetClient);
      this.listContratadosProviderFiltro(this.varPetClient);
    });

    setTimeout(() => {
      this.listaDatas();
    }, 1000);
  }

  listContratadosProvider() {
    this.serviceServiceContratados.listContratadosClient()
      .subscribe(res => this.lstServiceContratados = res);
  }

  listaDatas() {

    var data = new Date();
    var dataHoje = new Date((data.getMonth() + 1) + '/' + data.getDate() + '/' + data.getFullYear());

    for (let element of this.lstServiceContratados) {
      if (!this.datas.includes(element.dataCalendarioCorrecao)) {
        var dataAgenda = new Date(element.dataParaOrdenacao);
        if (dataHoje < dataAgenda) {
          this.datas.push(element.dataCalendarioCorrecao);
        }
      }
    }
  }

  enviarIdAgendamento(servico: ServiceContratados) {
    this.idAgendamento = null;
    this.idAgendamento = String(servico.id);
    this.observacaoAtendimento = servico
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    alert("teste")
    let data = this.datas[tabChangeEvent.index];

    this.listaPorTab = [];
  
    for (const element of this.lstServiceContratados) {
    
      if (data == element.dataCalendarioCorrecao) {
        this.listaPorTab.push(element);
      }

    }
  }

  listContratadosProviderFiltro(varPetProvider: PessoaFisica) {
  // alert('component varPetProvider: ' + JSON.stringify(varPetProvider));
    this.serviceServiceContratados.listContratadosClientFiltro(this.varPetClient.id + '')
      .subscribe(res => this.lstServiceContratados = res
        );
  }

  gravarStatusCancelado(lstServiceContratados: ServiceContratados[]) {

    this.observacaoAtendimento.cancelado = true;
    this.serviceServiceContratados.gravarStatusCanecelado(this.observacaoAtendimento).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Seu serviço foi cancelado com sucesso!',
          showConfirmButton: false,
          timer: 3000
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    );
  }
}
