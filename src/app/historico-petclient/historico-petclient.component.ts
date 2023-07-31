import { PessoaJuridica } from './../pessoa/pessoa-juridica';
import { HistoricoPetclientService } from './historico-petclient.service';
import { PessoaFisica } from './../pessoa/pessoa-fisica';
import { ListaServiceContratadosClientService } from './../lista-service-contratados-client/lista-service-contratados-client.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { MatTabChangeEvent } from '@angular/material';


declare var $: any;

@Component({
  selector: 'app-historico-petclient',
  templateUrl: './historico-petclient.component.html',
  styleUrls: ['./historico-petclient.component.css']
})
export class HistoricoPetclientComponent implements OnInit {

  @Input() lstServiceContratados: ServiceContratados[] = [];
  serviceListaServiceContratadosClientService: ListaServiceContratadosClientService;
  varPetClient: PessoaFisica = new PessoaFisica();
  msg: string;
  avaliacao: number = 5;
  motivoDeCancelamentoQuandoFinalizado = '';
  @Input() servicoContratadoAvaliado: ServiceContratados = new ServiceContratados;
  @Input() datas: string[] = [];
  listaPorTab: ServiceContratados[] = [];

  constructor(private serviceServiceContratados: HistoricoPetclientService) { }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetClient = retorno;
      this.listContratadosProviderFiltro(this.varPetClient);
    });

    setTimeout(() => {
      this.listaDatas();
    }, 1000);
  }


  listContratadosProviderFiltro(varPetProvider: PessoaFisica) {
    // console.log('component varPetProvider: ' + JSON.stringify(varPetProvider));
    this.serviceServiceContratados.listContratadosClientFiltro(this.varPetClient.id + '')
      .subscribe(res => this.lstServiceContratados = res);
  }


  salvarAvaliacao(lstServiceContratados: ServiceContratados[]) {

    for (const element of lstServiceContratados) {
      this.serviceServiceContratados.salvarAvaliacaoServico(element)
        .subscribe(res => {
          location.reload();
        });
    }
  }

  handleRate(event) {
    this.msg = 'Nota do serviço ' + event.value;
  }

  handleCancel(event) {
    this.msg = 'Nota cancelada';
  }

  handleMotivoCancelamento(event) {
    this.motivoDeCancelamentoQuandoFinalizado = 'Este serviço não foi cancelado';
  }

  setModalValue(varServiceContratado: ServiceContratados) {
    this.servicoContratadoAvaliado = varServiceContratado;
  }

  listaDatas() {

    for (let element of this.lstServiceContratados) {
      if (!this.datas.includes(element.dataCalendarioCorrecao)) {
        this.datas.push(element.dataCalendarioCorrecao);
      }
    }
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


  salvarAvaliacaoIndividual(servicoContratadoAvaliadoIndividual: ServiceContratados) {
    this.serviceServiceContratados.salvarAvaliacaoServico(servicoContratadoAvaliadoIndividual)
      .subscribe(res => {
        this.calcularMedia(servicoContratadoAvaliadoIndividual);
      });
  }

  calcularMedia(servicoContratadoAvaliadoIndividual: ServiceContratados) {
    const idProviderUpdated = servicoContratadoAvaliadoIndividual.idPetProvider;
    let lstServicoContratadoAvaliadoIndividualAux: ServiceContratados[];
    let lstMediaAvalicao: ServiceContratados[] = [];
    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);
    let soma = 0;
    let countNotZero = 0;
    let media = 0;
    let varPessoaJuridica: PessoaJuridica;

    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetClient = retorno;
      this.listContratadosProviderFiltro(this.varPetClient);
      this.serviceServiceContratados.buscaContratadosCalcularMedia(servicoContratadoAvaliadoIndividual)
        .subscribe(
          res => {
            lstServicoContratadoAvaliadoIndividualAux = res;
            for (const element of lstServicoContratadoAvaliadoIndividualAux) {
              lstMediaAvalicao.push(element);
              soma = element.avaliacao + soma;
              if (element.avaliacao !== 0) {
                countNotZero++;
              }
            }
            this.serviceServiceContratados.buscarPetProvider(Number(idProviderUpdated)).
              subscribe(
                res => {
                  varPessoaJuridica = res;
                  if (soma === 0 && countNotZero === 0) {
                    media = 0;
                  } else {
                    media = soma / countNotZero;
                  }
                  media = parseInt(media.toFixed(0));
                  varPessoaJuridica.mediaAvaliacao = media;
                  this.serviceServiceContratados.salvarMediaAvaliacao(varPessoaJuridica).
                    subscribe(
                      res => {
                        Swal.fire({
                          position: 'center',
                          type: 'success',
                          title: 'Avaliação feita',
                          text: 'Obrigada pela sua avaliação!',
                          showConfirmButton: false,
                          timer: 3000
                        });
                        setTimeout(() => {
                          location.reload();
                        }, 1000);
                      }
                    )

                }
              )
          }
        );

    });
  }
}

