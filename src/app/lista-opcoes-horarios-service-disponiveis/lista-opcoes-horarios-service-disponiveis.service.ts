import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CriacaoAgendaProvider } from '../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';


const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListaOpcoesHorariosServiceDisponiveisService {

  constructor(private http: HttpClient) { }

  listAgendaProvider(): Observable<CriacaoAgendaProvider[]>  {
    return this.http
    .get<CriacaoAgendaProvider[]>(API + '/agendaprovider');
  }

  listAgendaProviderFiltrar(idProvider: string): Observable<CriacaoAgendaProvider[]>  {
    return this.http.get<CriacaoAgendaProvider[]>(API + '/agendaprovider/idPetProvider?value=' + idProvider);
  }


  // colocar nos contratados
  salvarEmServicosContratados(varContratadosAgendaProvider: ServiceContratados): Observable<ServiceContratados> {
    return this.http.post<ServiceContratados>(API + '/contratadoprovider/', varContratadosAgendaProvider);
  }

   // PARA SALVAR UMA LISTA INTEIRA DE UMA VEZ
  // salvarListaEmServicosContratados(lstContratadosAgendaProvider: ServiceContratados[]): Observable<ServiceContratados> {
    //   return this.http.post<ServiceContratados>(API + '/contratadoprovider/', lstContratadosAgendaProvider);
    // }

  //DELETE NÃO LOGICO
  softDeleteCriacaoAgendaProvider(varContratadosAgendaProvider: CriacaoAgendaProvider): Observable<CriacaoAgendaProvider> {
    const url = `${API}/agendaprovider/${varContratadosAgendaProvider.id}`;
    console.log('url: ' + url);
    // varContratadosAgendaProvider.active = false;
    return this.http.put<CriacaoAgendaProvider>(url, varContratadosAgendaProvider);
          }

  public deleteCriacaoAgendaProvider(idPetProvider: string) {
          return this.http.delete(API + '/agendaprovider/' + idPetProvider);
            }

  atualizaEscolhido(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider) {
    const url = `${API}/agendaprovider/${varCriacaoAgendaProviderToAttach.id}`;
    varCriacaoAgendaProviderToAttach.escolhido = true;
      return this.http.put(url, varCriacaoAgendaProviderToAttach);
      }

  buscarEmailLoginConjunto(email: string): Observable<any> {
        return this.http.get(API + '/loginConjunto/email?value=' + email);
      }

      // usar o id desta pessoa fisica para procurar todas os pets
      // que estao asssociados a este cliente
  buscaPet(idPetcliente: number): Observable<any>  {
    return this.http.get(API + '/pets/idPetcliente?value=' + idPetcliente);
  }

}
