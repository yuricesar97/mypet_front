import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { PessoaFisica } from './pessoa-fisica';
import { PessoaJuridica } from './pessoa-juridica';
import { Observable, throwError } from 'rxjs';
import { LoginConjunto } from '../auth/loginConjunto';


const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  listPessoaFisica() {
    return this.http
      .get<PessoaFisica[]>(API + '/pessoafisica');
  }

  listPessoaJuridica() {
    return this.http
      .get<PessoaJuridica[]>(API + '/pessoajuridica');
  }

  buscarEmailLoginConjunto(email: string) {
    return this.http.get(API + '/loginConjunto/email?value=' + email);
  }

  buscarEmailPetProvider(email: string) {
    //console.log(email)
    console.log('url: ' + API + '/pessoajuridica/email?value=' + email);
    return this.http.get<PessoaJuridica>(API + '/pessoajuridica/email?value=' + email);
  }

  buscarEmailPetCliente(email: string) {
    //console.log(email)
    console.log('url: ' + API + '/pessoafisica/email?value=' + email);
    return this.http.get<PessoaJuridica>(API + '/pessoafisica/email?value=' + email);
  }

  //mesmo a id sendo number, fazemos ela em string para poder concatenar depois
  public deletePessoaFisica(id: string) {
    return this.http.delete(API + '/pessoafisica/' + id);
  }

  //DELETE NÃO LOGICO
  softDeletePessoaFisica(varPessoaFisica: PessoaFisica): Observable<PessoaFisica> {
    const url = `${API}/pessoafisica/${varPessoaFisica.id}`;
    varPessoaFisica.active = false;
    return this.http.put<PessoaFisica>(url, varPessoaFisica);
  }

  //DELETE NÃO LOGICO
  softDeletePessoaJuridica(varPessoaJuridica: PessoaJuridica): Observable<PessoaJuridica> {
    const url = `${API}/pessoajuridica/${varPessoaJuridica.id}`;
    console.log('url: ' + url);
    varPessoaJuridica.active = false;
    return this.http.put<PessoaJuridica>(url, varPessoaJuridica);
  }

  public deletePessoaJuridica(id: string) {
    return this.http.delete(API + '/pessoajuridica/' + id);
  }

  public salvarPessoaFisica(pessoaFisica: PessoaFisica): Observable<PessoaFisica> {
    pessoaFisica.tipoPerfil = 1;
    //alert(JSON.stringify(pessoaFisica));
    return this.http.post<PessoaFisica>(API + '/pessoafisica', pessoaFisica);
  }

  public salvarPessoaJuridica(pessoaJuridica: PessoaJuridica): Observable<PessoaJuridica> {
    pessoaJuridica.tipoPerfil = 2;
    return this.http.post<PessoaJuridica>(API + '/pessoajuridica', pessoaJuridica);
  }

  public atualizaPessoaJuridica(pessoaJuridica: PessoaJuridica): Observable<PessoaJuridica> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    return this.http.put<PessoaJuridica>(API + '/pessoajuridica/' + pessoaJuridica.id
      , pessoaJuridica, httpOptions)
      .pipe();
  }

  public atualizaPessoaFisica(pessoaFisica: PessoaFisica): Observable<PessoaFisica> {
    console.log("atualizaPessoaFisica: " + JSON.stringify(pessoaFisica))
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    return this.http.put<PessoaFisica>(API + '/pessoafisica/' + pessoaFisica.id
      , pessoaFisica, httpOptions)
      .pipe();
  }

  public atualizaLoginConjunto(login: LoginConjunto): Observable<LoginConjunto> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    return this.http.put<LoginConjunto>(API + '/loginConjunto/' + login.id
      , login, httpOptions)
      .pipe();
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  // upload foto cliente -*******************************************************************-
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:8080/pessoafisica/picture', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
  // upload foto servico -*******************************************************************-
  pushFileToStorageService(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:8080/pessoajuridica/picture', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
}
