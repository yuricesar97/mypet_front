import { PessoaJuridica } from './../pessoa/pessoa-juridica';
import { PessoaFisica } from './../pessoa/pessoa-fisica';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HistoricoPetclientService {

  constructor(private http: HttpClient) { }

  listContratadosClientFiltro(id: string): Observable<ServiceContratados[]>  {
    const url = API + '/contratadoprovider/historicoCliente?value=' + id;
    console.log('listContratadosClientFiltro url: ' + url);
    return this.http
    .get<ServiceContratados[]>(url);
  }

  buscarEmailLoginConjunto(email: string): Observable<any> {
    // console.log('email: ' + email);
    // console.log('url: ' + API + '/loginConjunto/email?value=' + email);
    return this.http.get(API + '/loginConjunto/email?value=' + email);
  }

  salvarAvaliacaoServico(varServiceContratados: ServiceContratados)  {
    return this.http.put(API + '/contratadoprovider/' + varServiceContratados.id, varServiceContratados);
  }

  salvarMediaAvaliacao(varPessoaJuridica: PessoaJuridica)  {
    const url = API + '/pessoajuridica/' + varPessoaJuridica.id;
    console.log('url para update: ' + url);
    return this.http.put(url, varPessoaJuridica);
  }

  buscaContratadosCalcularMedia(varServiceContratados: ServiceContratados): Observable<ServiceContratados[]> {
    const url = API + '/contratadoprovider/historicoProvider?value=' + varServiceContratados.idPetProvider;
    return this.http.get<ServiceContratados[]>(url);
  }

  buscarPetProvider(id: number): Observable<PessoaJuridica> {
    return this.http.get<PessoaJuridica>(API + '/pessoajuridica/' + id);
  }
}


