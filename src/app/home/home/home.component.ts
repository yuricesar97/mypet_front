import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';
import { PesquisarService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  cadastroCliente(){
    this.router.navigate(['pessoa', 'fisica', 'cadastrar']);
  }

  cadastroFornecedor(){
    this.router.navigate(['pessoa', 'juridica', 'cadastrar']);
  }

  pesquisarEvento(){
    this.router.navigate(['home', 'home']);
  }

}
