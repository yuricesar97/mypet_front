import { CriacaoAgendaProvider } from './../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { Observable } from 'rxjs';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListaServiceContratadosProviderService {

  constructor(private http: HttpClient) { }

  listContratadosProvider(): Observable<ServiceContratados[]>  {
    return this.http
    .get<ServiceContratados[]>(API + '/contratadoprovider');
  }

  listContratadosProviderFiltro(id: string): Observable<ServiceContratados[]>  {
    const url = API + '/contratadoprovider/idPetProvider?value=' + id;
    return this.http
    .get<ServiceContratados[]>(url);
  }
  listAgendaProviderFiltrarNaoContratados(idProvider: string): Observable<CriacaoAgendaProvider[]>  {
    return this.http.get<CriacaoAgendaProvider[]>(API + '/agendaprovider/idPetProvider?value=' + idProvider);
  }

  buscarEmailLoginConjunto(email: string): Observable<any> {
    return this.http.get(API + '/loginConjunto/email?value=' + email);
  }

  gravarStatusFinalizado(servicoFinalizado: ServiceContratados) {
    return this.http.put(API + '/contratadoprovider/' + servicoFinalizado.id, servicoFinalizado);
  }
  gravarStatusCancelado(servicoCancelado: ServiceContratados) {
    return this.http.put(API + '/contratadoprovider/' + servicoCancelado.id, servicoCancelado);
  }

}
