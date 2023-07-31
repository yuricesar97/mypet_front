import { HistoricoPetproviderService } from './historico-petprovider.service';
import { ListaServiceContratadosProviderService } from './../lista-service-contratados-provider/lista-service-contratados-provider.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-historico-petprovider',
  templateUrl: './historico-petprovider.component.html',
  styleUrls: ['./historico-petprovider.component.css']
})
export class HistoricoPetproviderComponent implements OnInit {

  @Input() lstServiceContratados: ServiceContratados[] = [];
  varServiceContratados: ServiceContratados;
  varPetProvider: PessoaJuridica = new PessoaJuridica();
  varPetProviderMedia: PessoaJuridica = new PessoaJuridica();
  mediaAvaliacao = 0;
  @Input() datas: string[] = [];
  listaPorTab: ServiceContratados[] = [];

  constructor(private serviceServiceContratados: HistoricoPetproviderService) { }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetProvider = retorno;
      this.listContratadosProviderFiltro(this.varPetProvider);
      setTimeout(() => {
        this.calcularMedia(this.lstServiceContratados);
      }, 200);
    });

    setTimeout(() => {
      this.listaDatas();
    }, 1000);

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

  listContratadosProviderFiltro(varPetProvider: PessoaJuridica) {
    this.serviceServiceContratados.listContratadosProviderFiltro(this.varPetProvider.id + '')
      .subscribe(res => this.lstServiceContratados = res);
    // console.log('this.lstServiceContratados: ' + this.lstServiceContratados);
  }


  gravarStatusFinalizado() {
    for (const element of this.lstServiceContratados) {
      if (element.status) {
        this.serviceServiceContratados.gravarStatusFinalizado(element).subscribe(
          response => {
            // alert('O serviço selecionado foi finalizado.');
            location.reload();
          });
      }
    }
  }

  calcularMedia(lstServiceContratados: ServiceContratados[]) {
    let soma = 0;
    for (const element of lstServiceContratados) {
      if (element.cancelado === false) {
        soma = soma + element.avaliacao;
      }
    }
    if (this.mediaAvaliacao === undefined || isNaN(this.mediaAvaliacao)
      || this.mediaAvaliacao === null) {
      this.mediaAvaliacao = 0;
    }
    if (soma !== 0 && lstServiceContratados.length !== 0) {
      this.mediaAvaliacao = soma / lstServiceContratados.length;
      this.mediaAvaliacao = parseInt(this.mediaAvaliacao.toFixed(), 10);
    }

    this.serviceServiceContratados.gravarMediaAvaliacao(this.varPetProvider,
      this.mediaAvaliacao).subscribe(response => {
        //location.reload();
      });
  }

}
