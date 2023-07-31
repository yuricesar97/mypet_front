import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

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
  
  login(){
    this.router.navigate(['/login'])
  }

}
