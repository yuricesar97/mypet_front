import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {InputTextModule, DataTableModule, ButtonModule, DialogModule} from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { AprovarPessoaComponent } from '../aprovar-pessoa.component';
import { FormsModule } from '@angular/forms';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule
  ],
  declarations: [AprovarPessoaComponent],
  exports: [AprovarPessoaComponent],
  providers: [PessoaJuridica, PessoaService]

})
export class AprovaoPessoaModule { }
