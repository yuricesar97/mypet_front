import { PessoaJuridica } from './../pessoa/pessoa-juridica';
import { JwtHelper } from 'angular2-jwt';
import { ListaServiceContratadosProviderService } from './lista-service-contratados-provider.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Component, OnInit, Input } from '@angular/core';
import { CriacaoAgendaProvider } from '../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { MatTabChangeEvent } from '@angular/material';
import Swal from 'sweetalert2';
import { PetService } from '../pet/pet.service';
import { Pet } from '../pet/pet';

@Component({
  selector: 'app-lista-service-contratados-provider',
  templateUrl: './lista-service-contratados-provider.component.html',
  styleUrls: ['./lista-service-contratados-provider.component.css']
})
export class ListaServiceContratadosProviderComponent implements OnInit {

  @Input() lstServiceContratados: ServiceContratados[] = [];
  varServiceContratados: ServiceContratados;
  jwtHelper: JwtHelper = new JwtHelper();
  varPetProvider: PessoaJuridica = new PessoaJuridica();
  @Input() lstCriacaoAgendaProviderAgendadoNaoContratados: CriacaoAgendaProvider[] = [];
  @Input() datas: string[] = [];
  listaPorTab: ServiceContratados[] = [];
  idAgendamento: string;
  observacaoAtendimento: ServiceContratados = new ServiceContratados;


  // const objLogin;
  constructor(private serviceServiceContratados: ListaServiceContratadosProviderService) {
  }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetProvider = retorno;
      this.listContratadosProviderFiltro(this.varPetProvider);
      this.listAgendaProviderFiltrarNaoContratados(this.varPetProvider);
    });

    setTimeout(() => {
      this.listaDatas();
    }, 1000);
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

  listContratadosProviderFiltro(varPetProvider: PessoaJuridica) {
    this.serviceServiceContratados.listContratadosProviderFiltro(this.varPetProvider.id + "")
      .subscribe(res => {
        this.lstServiceContratados = res
        //alert(JSON.stringify(this.lstServiceContratados))
      });
  }

  listAgendaProviderFiltrarNaoContratados(varPetProvider: PessoaJuridica) {
    this.serviceServiceContratados.listAgendaProviderFiltrarNaoContratados(varPetProvider.id + '').
      subscribe(res => this.lstCriacaoAgendaProviderAgendadoNaoContratados = res);
  }

  enviarIdAgendamento(servico: ServiceContratados) {
    this.idAgendamento = null;
    this.idAgendamento = String(servico.id);
    this.observacaoAtendimento = servico

  }

  gravarStatusFinalizado() {
    this.observacaoAtendimento.status = true;
    this.serviceServiceContratados.gravarStatusFinalizado(this.observacaoAtendimento).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Serviço Finalizado',
          text: 'Seu serviço foi finalizado com sucesso!',
          showConfirmButton: false,
          timer: 3000
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      });
  }

  gravarStatusCancelado() {
    this.observacaoAtendimento.cancelado = true;
    this.serviceServiceContratados.gravarStatusFinalizado(this.observacaoAtendimento).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Serviço Cancelado',
          text: 'Seu serviço foi cancelado com sucesso!',
          showConfirmButton: false,
          timer: 3000
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      });
  }


  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    let data = this.datas[tabChangeEvent.index];

    this.listaPorTab = [];

    for (const element of this.lstServiceContratados) {
      if (data == element.dataCalendarioCorrecao) {
        this.listaPorTab.push(element);
      }

    }
  }
}
