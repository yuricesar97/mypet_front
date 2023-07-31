import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';
import { ActivatedRoute, Router } from '@angular/router';
import { PesquisarService } from 'src/app/home/home.service';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-perfil-pet-client',
  templateUrl: './perfil-pet-client.component.html',
  styleUrls: ['./perfil-pet-client.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})

export class PerfilPetClientComponent implements OnInit {

  pessoa: PessoaFisica;
  public pessoaFisica: PessoaFisica = new PessoaFisica();

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private pesquisarService: PesquisarService,
    private petClientService: PessoaService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>) {
    this.french();
  }

  french() {
    this._adapter.setLocale('pt');
  }

  formRegister = this.formBuilder.group({
    'nomeCompleto': ['', Validators.required],
    'cpf': ['', Validators.required],
    'dataNascimento': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'senha': ['', [Validators.required, Validators.minLength(6)]],
    'senha2': ['', [Validators.required, Validators.minLength(6)]],
    'logradouro': ['', Validators.required],
    'numero': [''],
    'complemento': [''],
    'bairro': ['', Validators.required],
    'cidade': ['', Validators.required],
    'cep': ['', [Validators.required, Validators.minLength(8)]],
    'estado': ['', Validators.required],
    'telefoneFixo': ['', [Validators.required, Validators.minLength(10)]],
    'telefoneCelular': ['', [Validators.required, Validators.minLength(11)]]

  }, { validator: this.matchingSenha })

  ngOnInit() {

    const token = localStorage.getItem("localUser")
    var obj = JSON.parse(token)

    this.pesquisarService.buscarDetalhesPorEmail(obj.email).subscribe((retorno) => {
      this.pessoaFisica = retorno;
    });
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  matchingSenha(group: FormGroup) {
    if (group) {
      const senha = group.controls['senha'].value;
      const senha2 = group.controls['senha2'].value;

      if (senha == senha2) {
        return null;
      }
    }
    return { matching: false };
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.petClientService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Upload feito com sucesso!',
          showConfirmButton: true,
          timer: 1500
        });
      }
    });

    this.selectedFiles = undefined;
  }

  public alterar() {
    this.petClientService.atualizaPessoaFisica(this.pessoaFisica).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Cadastro alterado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    );
  }

  public inativar() {
    this.petClientService.softDeletePessoaFisica(this.pessoaFisica).subscribe(
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
