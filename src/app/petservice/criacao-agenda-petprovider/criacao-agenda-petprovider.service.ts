import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CriacaoAgendaProvider } from './criacao-agenda-petprovider';
import { Observable, throwError } from 'rxjs';

const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}



@Injectable({
  providedIn: 'root'
})
export class CriacaoAgendaPetproviderService {

  constructor(private http: HttpClient) { }

  salvarCriacaoAgendaProvider(lstCriacaoAgendaProviderToAttach: CriacaoAgendaProvider[]): Observable<any> {
    return this.http.post(API + '/agendaProvider/', lstCriacaoAgendaProviderToAttach);
  }

  salvarCriacaoAgendaProviderTeste(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider): Observable<any> {
    return this.http.post(API + '/agendaprovider/', varCriacaoAgendaProviderToAttach);
  }


  listAgendaProviderFiltrarNaoContratados(idProvider: string): Observable<CriacaoAgendaProvider[]>  {
    return this.http.get<CriacaoAgendaProvider[]>(API + '/agendaprovider/idPetProvider?value=' + idProvider);
  }

  verificaAgendaProvider(varPetProvider: PessoaJuridica,
    varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider): Observable<CriacaoAgendaProvider>  {
    return this.http.get<CriacaoAgendaProvider>(API + '/agendaprovider/selecionadosProvider?idPetProvider=' + varPetProvider.id
    + '&segundaCheck=' + varCriacaoAgendaProviderToAttach.segundaCheck + '&tercaCheck=' + varCriacaoAgendaProviderToAttach.tercaCheck
    + '&quartaCheck='  + varCriacaoAgendaProviderToAttach.quartaCheck + '&quintaCheck=' + varCriacaoAgendaProviderToAttach.quintaCheck
    + '&sextaCheck=' + varCriacaoAgendaProviderToAttach.sextaCheck + '&sabadoCheck=' + varCriacaoAgendaProviderToAttach.sabadoCheck
    + '&domingoCheck=' + varCriacaoAgendaProviderToAttach.domingoCheck
    + '&dataCalendarioCorrecao=' + varCriacaoAgendaProviderToAttach.dataCalendarioCorrecao
    + '&servicoEscolhido=' + varCriacaoAgendaProviderToAttach.servicoEscolhido
    + '&tempoInicioCorrecao=' + varCriacaoAgendaProviderToAttach.tempoInicioCorrecao
    + '&tempoFimCorrecao=' + varCriacaoAgendaProviderToAttach.tempoFimCorrecao
    + '&siglaDia=' + varCriacaoAgendaProviderToAttach.siglaDia
    + '&tempoInicioIntervalo=' + varCriacaoAgendaProviderToAttach.tempoInicioIntervalo);
  }

  verificaAgendaProviderSemSiglaDia(varPetProvider: PessoaJuridica,
    varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider): Observable<CriacaoAgendaProvider> {
      return this.http.get<CriacaoAgendaProvider>(API + '/agendaprovider/selecionadosProvider?idPetProvider=' + varPetProvider.id
      + '&dataCalendarioCorrecao=' + varCriacaoAgendaProviderToAttach.dataCalendarioCorrecao
      + '&servicoEscolhido=' + varCriacaoAgendaProviderToAttach.servicoEscolhido
      + '&tempoInicioCorrecao=' + varCriacaoAgendaProviderToAttach.tempoInicioCorrecao
      + '&tempoFimCorrecao=' + varCriacaoAgendaProviderToAttach.tempoFimCorrecao
      + '&siglaDia=' + varCriacaoAgendaProviderToAttach.siglaDia
      + '&tempoInicioIntervalo=' + varCriacaoAgendaProviderToAttach.tempoInicioIntervalo);
    }

  buscarEmailLoginConjunto(email: string): Observable<any> {
    return this.http.get(API + '/loginConjunto/email?value=' + email);
  }


}
