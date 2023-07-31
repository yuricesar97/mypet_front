import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { PesquisarService } from '../../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-fornecedores',
  templateUrl: './buscar-fornecedores.component.html',
  styleUrls: ['./buscar-fornecedores.component.css']
})
export class BuscarFornecedoresComponent implements OnInit {
  
  public forn: PessoaJuridica = new PessoaJuridica();
  forns: PessoaJuridica[] = [];
  selected: string;

  constructor(
    private homeService: PesquisarService,
    private router: Router) { }

  ngOnInit() {
  }

  pesquisarFornecedor(){
    this.homeService.getForns(this.forn);
  }
}
