import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';

@Component({
  selector: 'app-busca-pet-client',
  templateUrl: './busca-pet-client.component.html',
  styleUrls: ['./busca-pet-client.component.css']
})

export class BuscarPetClientComponent implements OnInit {

  filter: string = '';
  petclients: PessoaFisica[] = [];
  petclient: PessoaFisica;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
                this.router = router;
  }
  ngOnInit(): void {

    this.petclients = this.activatedRoute.snapshot.data['petclients'];

  }
  public voltar(){
    this.router.navigate(['administrador', 'menu-inicial-admin']);
  }
}
