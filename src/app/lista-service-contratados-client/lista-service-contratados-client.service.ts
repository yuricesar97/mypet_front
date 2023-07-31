import { CriacaoAgendaProvider } from './../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { Observable } from 'rxjs';
import { ServiceContratados } from '../lista-service-contratados/lista-service-contratados';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListaServiceContratadosClientService {

  constructor(private http: HttpClient) { }

  listContratadosClient(): Observable<ServiceContratados[]>  {
    return this.http
    .get<ServiceContratados[]>(API + '/contratadoprovider');
  }

  // http://localhost:8080/contratadoprovider/idPetProvider?value=8

  listContratadosClientFiltro(id: string): Observable<ServiceContratados[]>  {
    const url = API + '/contratadoprovider/idPetCliente?value=' + id;
    // alert('url: ' + url);
    return this.http.get<ServiceContratados[]>(url);
  }

  buscarEmailLoginConjunto(email: string): Observable<any> {
    console.log('email: ' + email);
    console.log('url: ' + API + '/loginConjunto/email?value=' + email);
    return this.http.get(API + '/loginConjunto/email?value=' + email);
  }


  gravarStatusCanecelado(varServiceContratados: ServiceContratados): Observable<ServiceContratados> {
    const url = `${API}/contratadoprovider/${varServiceContratados.id}`;
    console.log('varServiceContratados url: ' + url);
    varServiceContratados.cancelado = true;
    return this.http.put<ServiceContratados>(url, varServiceContratados);
          }

// usar a chave estrangeira para cancelar da tabela de agenda para poder disponibilizar o mesmo
// horário caso fosse cancealdo


  buscarAgendaServicoContratadoCancelado(varServiceContratados: ServiceContratados): Observable<any>  {
    const url = API + '/agendaprovider/' + varServiceContratados.idAgendaProvider;
    console.log(url);
    return this.http.get<CriacaoAgendaProvider>(url);
  }


  gravarStatusCanceladoNaAgenda(varCriacaoAgendaProvider: CriacaoAgendaProvider) {
    const url = `${API}/agendaprovider/${varCriacaoAgendaProvider.id}`;
    varCriacaoAgendaProvider.cancelado = true;
    return this.http.put<CriacaoAgendaProvider>(url, varCriacaoAgendaProvider);
  }
}
