import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import Swal from 'sweetalert2';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { LoginConjunto } from 'src/app/auth/loginConjunto';

@Component({
  selector: 'app-deleta-pet-client',
  templateUrl: './deleta-pet-client.component.html',
  styleUrls: ['./deleta-pet-client.component.css']
})

export class DeletaPetClientComponent implements OnInit {

  filter: string = '';
  @Input() petclients: PessoaFisica[] = [];
  @Input() petclient: PessoaFisica;
  aux: PessoaFisica[] = [];
  loginConjunto: LoginConjunto;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private petClientService: PessoaService) {
  }
  ngOnInit(): void {
    this.loginConjunto = null
    this.listFromUser();
  }

  listFromUser(){
    this.petClientService.listPessoaFisica().subscribe(petclients => {
      this.petclients = petclients;
      alert(JSON.stringify(this.petclients))
    });
  }

  public softDelete(varPessoaFisica: PessoaFisica) {
    varPessoaFisica.active = false;
    this.petClientService.softDeletePessoaFisica(varPessoaFisica)
    .subscribe(
      res => {
        this.listFromUser();
      }
    );
  }
  
}
