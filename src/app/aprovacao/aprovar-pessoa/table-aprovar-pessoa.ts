import {PessoaJuridica} from '../../pessoa/pessoa-juridica';
import { PessoaService } from '../../pessoa/pessoa.service';
import { OnInit } from '@angular/core';

export class TableCrudAprovarPessssoa implements OnInit {

  displayDialog: boolean;

    pessoaJuridica: PessoaJuridica;

    pessoaJuridicaSelecionada: PessoaJuridica;

    novaPessoaJuridica: boolean;

    listaPessoaJuridica: PessoaJuridica[];

    cols: any[];

    constructor(private pessoaJuridicaService: PessoaService) {
     this.pessoaJuridica.razaoSocial = '' ;
     this.pessoaJuridica.cpf = '' ;
     this.pessoaJuridica.telefoneFixo = '' ;
     this.pessoaJuridica.telefoneCelular = '' ;
     this.pessoaJuridica.logradouro = '' ;
     this.pessoaJuridica.numero = 0 ;
     this.pessoaJuridica. tipoPerfil = 0;
     this.pessoaJuridica.complemento = '' ;
     this.pessoaJuridica.bairro = '' ;
     this.pessoaJuridica.cidade = '' ;
     this.pessoaJuridica.estado = '' ;
     this.pessoaJuridica.cep = '' ;
     this.pessoaJuridica.email = '' ;
     this.pessoaJuridica.senha = '' ;
     this.pessoaJuridica.fotoPerfil = '' ;
     this.pessoaJuridica.banhoETosa = '';
     this.pessoaJuridica.consulta = '';
     this.pessoaJuridica.tosaExotica = '';
     this.pessoaJuridica.vacinacao = '';
     this.pessoaJuridica.cirurgiaGeral = '';
     this.pessoaJuridica.hidratacao = '';
     this.pessoaJuridica.penteadosArtisticos = '';
     this.pessoaJuridica.acupuntura = '';
     this.pessoaJuridica.spa = '';
     this.pessoaJuridica.hotel = '';
     this.pessoaJuridica.creche = '';
     this.pessoaJuridica.taxi = '';
     this.pessoaJuridica.ensaioFotografico = '';
     this.pessoaJuridica.adestramento = '';
     this.pessoaJuridica.massagem = '';
     this.pessoaJuridica.petwalk = '';
    }

    ngOnInit() {
      this.pessoaJuridicaService.listPessoaJuridica().subscribe(listaPessoaJuridica => this.listaPessoaJuridica = listaPessoaJuridica);

      this.cols = [
          { field: 'razaoSocial', header: 'Razao Social' },
          { field: 'cpf', header: 'CNPJ' },
          { field: 'telefoneFixo', header: 'Telefone Fixo' },
          { field: 'telefoneCelular', header: 'Telefone Celular' } 
      ];
  }

  showDialogToAdd() {
      this.novaPessoaJuridica = true;
      this.pessoaJuridica;
      this.displayDialog = true;
  }

  save() {
      let listaPessoaJuridica = [...this.listaPessoaJuridica];
      if (this.novaPessoaJuridica)
      listaPessoaJuridica.push(this.pessoaJuridica);
      else
      listaPessoaJuridica[this.listaPessoaJuridica.indexOf(this.pessoaJuridicaSelecionada)] = this.pessoaJuridica;

      this.listaPessoaJuridica = listaPessoaJuridica;
      this.pessoaJuridica = null;
      this.displayDialog = false;
  }

  delete() {
      let index = this.listaPessoaJuridica.indexOf(this.pessoaJuridicaSelecionada);
      this.listaPessoaJuridica = this.listaPessoaJuridica.filter((val, i) => i != index);
      this.pessoaJuridica = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.novaPessoaJuridica = false;
      this.pessoaJuridica = this.cloneCar(event.data);
      this.displayDialog = true;
  }


  cloneCar(c: PessoaJuridica): PessoaJuridica {
      let pessoaJuridica;
// tslint:disable-next-line: forin
      for (let prop in c) {
        pessoaJuridica[prop] = c[prop];
      }
      return pessoaJuridica;
  }
}
