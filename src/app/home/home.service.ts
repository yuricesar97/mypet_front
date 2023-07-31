import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, take } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { PessoaFisica } from '../pessoa/pessoa-fisica';
import { Router } from '@angular/router';

const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PesquisarService {

  fornecedores: Observable<PessoaJuridica[]>;
  forns: PessoaJuridica[] = [];
  private num: number;

  constructor(private http: HttpClient,
    private router: Router) {
    this.router = router;
  }

  buscar() {
    return this.http.get<PessoaJuridica[]>(API + '/pessoajuridica');
  }

  buscarDetalhes(id: number): Observable<PessoaJuridica> {
    return this.http.get<PessoaJuridica>(API + '/pessoajuridica/' + id)
      .pipe()
  }

  updateDetalhes(id: number, value: any): Observable<PessoaJuridica> {
    return this.http.put<PessoaJuridica>(API + '$/pessoajuridica/${id}', value);
  }

  abrirDetalhe(pessoa: PessoaJuridica): Observable<PessoaJuridica> {
    return this.http.get<PessoaJuridica>(API + '/pessoajuridica/' + pessoa.id);
  }

  buscarDetalhesPetClient(id: number): Observable<PessoaFisica> {
    return this.http.get<PessoaFisica>(API + '/pessoafisica/' + id)
      .pipe()
  }

  buscarDetalhesPorEmail(email: string): Observable<PessoaFisica> {
    return this.http.get<PessoaFisica>(API + '/pessoafisica/email?value=' + email);
  }

  buscarDetalhesPorEmailPetProvider(email: string): Observable<PessoaJuridica> {
    return this.http.get<PessoaJuridica>(API + '/pessoajuridica/email?value=' + email);
  }

  getForns(pessoa: PessoaJuridica) {
    this.filtroHome(pessoa).subscribe(f => {
      this.forns = f
      this.router.navigate(['home', 'resultado'])
    });
  }

  filtroHome(pessoa: PessoaJuridica): Observable<PessoaJuridica[]> {

    this.fornecedores = this.http.get<PessoaJuridica[]>(API + '/pessoajuridica/razaoSocialAndCidadeAndBairro?cidade=' + pessoa.cidade +
      '&razaoSocial=' + pessoa.razaoSocial + '&bairro=' + pessoa.bairro);

    return this.fornecedores;
  }

}
