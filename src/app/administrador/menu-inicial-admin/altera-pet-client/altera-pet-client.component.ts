import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';
import { ActivatedRoute } from '@angular/router';
import { PesquisarService } from 'src/app/home/home.service';
import { PessoaService } from 'src/app/pessoa/pessoa.service';

@Component({
  selector: 'app-altera-pet-client',
  templateUrl: './altera-pet-client.component.html',
  styleUrls: ['./altera-pet-client.component.css']
})
export class AlteraPetClientComponent implements OnInit {

  pessoa: PessoaFisica;
  public pessoaFisica: PessoaFisica = new PessoaFisica();

  constructor(private pesquisarService: PesquisarService,
              private petClientService: PessoaService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const pessoa = this.activatedRoute.snapshot.params.id;
    this.pesquisarService.buscarDetalhesPetClient(pessoa).subscribe((retorno) => { 
      this.pessoaFisica = retorno;
    });
  }

  public cancelar(){

  }

  public alterar(){
    this.petClientService.atualizaPessoaFisica(this.pessoaFisica).subscribe(
      response => {
        alert('PetClient alterado com sucesso!');
        window.location.href = '/administrador/menu-inicial-admin';
      }
    );
  }
}
