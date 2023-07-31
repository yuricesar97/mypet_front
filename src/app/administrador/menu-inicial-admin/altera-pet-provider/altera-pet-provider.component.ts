import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { PesquisarService } from 'src/app/home/home.service';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-altera-pet-provider',
  templateUrl: './altera-pet-provider.component.html',
  styleUrls: ['./altera-pet-provider.component.css']
})
export class AlteraPetProviderComponent implements OnInit {

  pessoa: PessoaJuridica;
  public pessoaJuridica: PessoaJuridica = new PessoaJuridica();

  constructor(private pesquisarService: PesquisarService,
              private petProviderService: PessoaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const pessoa = this.activatedRoute.snapshot.params.id;
    console.log("pessoa jurídica: " + pessoa);
    this.pesquisarService.buscarDetalhes(pessoa).subscribe((retorno) => { 
      this.pessoaJuridica = retorno;
    });
  }
  public alterar(){
    console.log(this.pessoaJuridica);
    this.petProviderService.atualizaPessoaJuridica(this.pessoaJuridica).subscribe(
      response => {
        alert('PetProvider alterado com sucesso!');
        window.location.href = '/administrador/menu-inicial-admin';
      }
    );
  }
}
