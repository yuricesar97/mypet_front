import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CadastroJuridicaComponent } from './pessoa-juridica/cadastro-juridica/cadastro-juridica.component';
import { CadastroFisicaComponent } from './pessoa-fisica/cadastro-fisica/cadastro-fisica.component';
import { CheckboxModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputMaskModule,
    TableModule,
    ButtonModule,
    FileUploadModule,
    InputTextareaModule,
    RadioButtonModule,
    CheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  declarations: [
    CadastroJuridicaComponent,
    CadastroFisicaComponent
  ],
  exports: [
    CadastroJuridicaComponent,
    CadastroFisicaComponent
  ]
})
export class PessoaModule { }
