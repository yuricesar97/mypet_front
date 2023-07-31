import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from '../../pessoa-juridica';
import { PessoaService } from '../../pessoa.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-cadastro-juridica',
  templateUrl: './cadastro-juridica.component.html',
  styleUrls: ['./cadastro-juridica.component.css']
})
export class CadastroJuridicaComponent implements OnInit, ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


 formRegister = this.formBuilder.group({
    'razaoSocial' :['',[Validators.required,Validators.minLength(6)]],
    'cpf' :['',Validators.required],
    'email' :['',[Validators.required,Validators.email]],
    'logradouro' :['',Validators.required],
    'numero' :[''],
    'complemento' :[''],
    'bairro' :['',Validators.required],
    'cidade' :['',Validators.required],
    'estado' :['',Validators.required],
    'telefoneFixo': ['',[Validators.required,Validators.minLength(10)]],
    'telefoneCelular':['',[Validators.required,Validators.minLength(11)]],
    'cep' :['',[Validators.required,Validators.minLength(8)]],
    'senha' :['',[Validators.required,Validators.minLength(6)]],
    'senha2' :['',[Validators.required,Validators.minLength(6)]],
    'descricaoPetProvider': ['']
  }, {validator: this.matchingSenha})



  public pessoaJuridica: PessoaJuridica = new PessoaJuridica();
  minPw = 8;

  constructor(
    private pessoaJuridicaService: PessoaService,
    private router: Router,
    private formBuilder: FormBuilder) {

}



  ngOnInit() {
    console.log(this.formRegister.value)
  }

  matchingSenha(group: FormGroup){
    if(group){
      const senha = group.controls['senha'].value;
      const senha2 = group.controls['senha2'].value;

      if(senha == senha2){
        return null;
      }
    }
    return{ matching:false};
}
  public salvar() {

   this.pessoaJuridica.razaoSocial = this.formRegister.controls.razaoSocial.value;
   this.pessoaJuridica.cpf = this.formRegister.controls.cpf.value;
   this.pessoaJuridica.email = this.formRegister.controls.email.value;
   this.pessoaJuridica.logradouro = this.formRegister.controls.logradouro.value;
   this.pessoaJuridica.numero = this.formRegister.controls.numero.value;
   this.pessoaJuridica.complemento = this.formRegister.controls.complemento.value;
   this.pessoaJuridica.bairro = this.formRegister.controls.bairro.value;
   this.pessoaJuridica.cidade = this.formRegister.controls.cidade.value;
   this.pessoaJuridica.estado = this.formRegister.controls.estado.value;
   this.pessoaJuridica.telefoneFixo = this.formRegister.controls.telefoneFixo.value;
   this.pessoaJuridica.telefoneCelular = this.formRegister.controls.telefoneCelular.value;
   this.pessoaJuridica.cep = this.formRegister.controls.cep.value;
   this.pessoaJuridica.senha = this.formRegister.controls.senha.value;
   this.pessoaJuridica.descricaoPetProvider = this.formRegister.controls.descricaoPetProvider.value;

     if(this.pessoaJuridica.banhoETosa)  {
      this.pessoaJuridica.banhoETosa = "banhoETosa"
    }else{
      this.pessoaJuridica.banhoETosa = null
    }

    if(this.pessoaJuridica.consulta)  {
      this.pessoaJuridica.consulta = "consulta"
    }else{
      this.pessoaJuridica.consulta = null
    }

    if(this.pessoaJuridica.tosaExotica)  {
      this.pessoaJuridica.tosaExotica = "tosaExotica"
    }else{
      this.pessoaJuridica.tosaExotica = null
    }

    if(this.pessoaJuridica.vacinacao)  {
      this.pessoaJuridica.vacinacao = "vacinacao"
    }else{
      this.pessoaJuridica.vacinacao = null
    }

    if(this.pessoaJuridica.cirurgiaGeral)  {
      this.pessoaJuridica.cirurgiaGeral = "cirurgiaGeral"
    }else{
      this.pessoaJuridica.cirurgiaGeral = null
    }

    if(this.pessoaJuridica.hidratacao)  {
      this.pessoaJuridica.hidratacao = "hidratacao"
    }else{
      this.pessoaJuridica.hidratacao = null
    }

    if(this.pessoaJuridica.penteadosArtisticos)  {
      this.pessoaJuridica.penteadosArtisticos = "penteadosArtisticos"
    }else{
      this.pessoaJuridica.penteadosArtisticos = null
    }

    if(this.pessoaJuridica.acupuntura)  {
      this.pessoaJuridica.acupuntura = "acupuntura"
    }else{
      this.pessoaJuridica.acupuntura = null
    }

    if(this.pessoaJuridica.spa)  {
      this.pessoaJuridica.spa = "spa"
    }else{
      this.pessoaJuridica.spa = null
    }

    if(this.pessoaJuridica.hotel)  {
      this.pessoaJuridica.hotel = "hotel"
    }else{
      this.pessoaJuridica.hotel = null
    }

    if(this.pessoaJuridica.creche)  {
      this.pessoaJuridica.creche = "creche"
    }else{
      this.pessoaJuridica.creche = null
    }

    if(this.pessoaJuridica.taxi)  {
      this.pessoaJuridica.taxi = "taxi"
    }else{
      this.pessoaJuridica.taxi = null
    }

    if(this.pessoaJuridica.ensaioFotografico)  {
      this.pessoaJuridica.ensaioFotografico = "ensaioFotografico"
    }else{
      this.pessoaJuridica.ensaioFotografico = null
    }

    if(this.pessoaJuridica.adestramento)  {
      this.pessoaJuridica.adestramento = "adestramento"
    }else{
      this.pessoaJuridica.adestramento = null
    }

    if(this.pessoaJuridica.massagem)  {
      this.pessoaJuridica.massagem = "massagem"
    }else{
      this.pessoaJuridica.massagem = null
    }

    if(this.pessoaJuridica.petwalk)  {
      this.pessoaJuridica.petwalk = "petwalk"
    }else{
      this.pessoaJuridica.petwalk = null
    }

    this.pessoaJuridicaService.salvarPessoaJuridica(this.pessoaJuridica).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Cadastro efetuado com sucesso!',
          text: 'Agora é só aguardar a aprovação do nosso setor administrativo.',
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
    this.router.navigate(['administrador', 'menu-inicial-admin']);
  }




}
