import { PessoaFisica } from './../pessoa/pessoa-fisica';
import { PetService } from './pet.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {


  displayedColumns: string[] = ['nomePet', 'racaPet', 'especiePet', 'excluirPet'];
  public varPet: Pet = new Pet;
  public varPessoaFisica: PessoaFisica = new PessoaFisica;
  listaPets: Pet[] = [];
  aux: Pet[] = [];
  public petAlterar: Pet = new Pet;

  constructor(private varPetService: PetService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.varPetService.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPessoaFisica = retorno;
      this.varPetService.buscarPets(this.varPessoaFisica.id).subscribe((ret) => {
        this.listaPets = ret;
      });
    });


  }

  f = this.formBuilder.group({
    'nome': ['', Validators.required],
    'raca': ['', Validators.required],
    'especie': ['', Validators.required]
  })

  salvarPet(varPet: Pet) {

    varPet.idPetcliente = this.varPessoaFisica.id;
    this.varPetService.salvarPet(varPet).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Pet cadastrado',
          text: 'Seu Pet foi cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 3000
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    );
  }

  excluirPet(varPet: Pet) {
    varPet.active = false;
    this.varPetService.excluirPet(varPet).subscribe(res => {
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Pet excluído',
        text: 'Seu Pet foi excluído com sucesso!',
        showConfirmButton: false,
        timer: 3000
      });
      setTimeout(() => {
        location.reload();
      }, 1000);
    })
  }

}
