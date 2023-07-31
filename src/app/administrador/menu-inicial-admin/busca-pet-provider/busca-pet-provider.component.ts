import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';

@Component({
  selector: 'app-busca-pet-provider',
  templateUrl: './busca-pet-provider.component.html',
  styleUrls: ['./busca-pet-provider.component.css']
})

export class BuscarPetProviderComponent implements OnInit {

  filter: string = '';
  pessoas: PessoaJuridica[] = [];
  pessoa: PessoaJuridica;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
                this.router = router;
  }
  ngOnInit(): void {

    this.pessoas = this.activatedRoute.snapshot.data['pessoas'];

  }
  public voltar(){
    this.router.navigate(['administrador', 'menu-inicial-admin']);
  }
}
