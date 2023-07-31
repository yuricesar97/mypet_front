import { Component, OnInit } from '@angular/core';
import { PesquisarService } from 'src/app/home/home.service';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-perfil-pet-provider',
  templateUrl: './perfil-pet-provider.component.html',
  styleUrls: ['./perfil-pet-provider.component.css']
})
export class PerfilPetProviderComponent implements OnInit {

  pessoa: PessoaJuridica;
  public pessoaJuridica: PessoaJuridica = new PessoaJuridica();

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(
    private pesquisarService: PesquisarService,
    private petProviderService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    const token = localStorage.getItem("localUser")
    var obj = JSON.parse(token)

    this.pesquisarService.buscarDetalhesPorEmailPetProvider(obj.email).subscribe((retorno) => {
      this.pessoaJuridica = retorno;
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.petProviderService.pushFileToStorageService(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Upload de foto feito com sucesso!',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });

    this.selectedFiles = undefined;
  }

  public alterar() {
    console.log(this.pessoaJuridica);
    this.petProviderService.atualizaPessoaJuridica(this.pessoaJuridica).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Seu cadastro foi alterado com sucesso!',
          showConfirmButton: false,
          timer: 2000
        });
        setTimeout(() => {
          location.reload()
        }, 1000);
      }
    );
  }

  public inativar() {
    this.petProviderService.softDeletePessoaJuridica(this.pessoaJuridica).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Cadastro inativado com sucesso... Que pena, volte logo!',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          this.authService.logout();
          window.location.href = '/home/home';
        }, 1500);
      }
    );
  }
}
