import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleta-pet-provider',
  templateUrl: './deleta-pet-provider.component.html',
  styleUrls: ['./deleta-pet-provider.component.css']
})

export class DeletaPetProviderComponent implements OnInit {

  filter: string = '';
  @Input() pessoas: PessoaJuridica[] = [];
  pessoa: PessoaJuridica;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private petProviderService: PessoaService) {
                this.router = router;
  }
  ngOnInit(): void {

    this.listFromUser();
    this.pessoas = this.activatedRoute.snapshot.data['pessoas'];

  }

  public listFromUser() {
    this.petProviderService.listPessoaJuridica().
    subscribe(petProviders => this.pessoas = petProviders);
  }

  public softDelete(varPessoaJuridica: PessoaJuridica) {

    Swal.fire({
      title: 'Desativar usuário',
      text: "Deseja desativar esse usuário?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        varPessoaJuridica.active = false;
        this.petProviderService.softDeletePessoaJuridica(varPessoaJuridica)
        .subscribe(
          res => {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Usuário desativado com sucesso!',
                showConfirmButton: false,
                timer: 3000
              });
              setTimeout(() => {
                location.reload();
              }, 1000);
          });
      }
      else {

      }
    })
  }

  reativar(varPessoaJuridica: PessoaJuridica){
    Swal.fire({
      title: 'Reativar usuário',
      text: "Deseja reativar esse usuário?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        varPessoaJuridica.active = true;
        this.petProviderService.atualizaPessoaJuridica(varPessoaJuridica).subscribe(
          res => {
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'Usuário reativado com sucesso!',
              showConfirmButton: false,
              timer: 3000
            });
            setTimeout(() => {
              location.reload();
            }, 1000);
          });
      }
      else {

      }
    })
  }
}
