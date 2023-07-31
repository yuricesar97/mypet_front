import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from '../../pessoa-fisica';
import { PessoaService } from '../../pessoa.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import Swal from 'sweetalert2';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-cadastro-fisica',
  templateUrl: './cadastro-fisica.component.html',
  styleUrls: ['./cadastro-fisica.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class CadastroFisicaComponent implements OnInit, ErrorStateMatcher {

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
    // 'telefoneFixo': ['', [Validators.required, Validators.minLength(10)]],
    // 'telefoneCelular': ['', [Validators.required, Validators.minLength(11)]]

  }, { validator: this.matchingSenha })

  public pessoaFisica: PessoaFisica = new PessoaFisica();

  constructor(
    private pessoaFisicaService: PessoaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _adapter: DateAdapter<any>) {
      this.french();
  }

  french() {
    this._adapter.setLocale('pt');
  }

  ngOnInit() { }

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

  public salvar() {

    this.pessoaFisica.nomeCompleto = this.formRegister.controls.nomeCompleto.value;
    this.pessoaFisica.cpf = this.formRegister.controls.cpf.value;
    this.pessoaFisica.email = this.formRegister.controls.email.value;
    this.pessoaFisica.logradouro = this.formRegister.controls.logradouro.value;
    this.pessoaFisica.numero = this.formRegister.controls.numero.value;
    this.pessoaFisica.complemento = this.formRegister.controls.complemento.value;
    this.pessoaFisica.bairro = this.formRegister.controls.bairro.value;
    this.pessoaFisica.cidade = this.formRegister.controls.cidade.value;
    this.pessoaFisica.estado = this.formRegister.controls.estado.value;
    // this.pessoaFisica.telefoneCelular = this.formRegister.controls.telefoneCelular.value;
    // this.pessoaFisica.telefoneFixo = this.formRegister.controls.telefoneFixo.value;
    this.pessoaFisica.cep = this.formRegister.controls.cep.value;
    this.pessoaFisica.senha = this.formRegister.controls.senha.value;
    this.pessoaFisica.dataNascimento = this.formRegister.controls.dataNascimento.value;


    this.pessoaFisica.active = true;
    this.pessoaFisicaService.salvarPessoaFisica(this.pessoaFisica).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Cadastro efetuado com sucesso!',
          text: 'Você pode logar agora com o e-mail: ' + this.pessoaFisica.email,
          showConfirmButton: false,
          timer: 3000
        });
        setTimeout(() => {
          window.location.href = '/home/home';
        }, 2500);
      }
    );
  }
  public voltar() {
    this.router.navigate(['home', 'home']);
  }

}
