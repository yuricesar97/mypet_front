import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetEventComponent } from './pet-event.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { PesquisarPetEventComponent } from './pesquisar-pet-event/pesquisar-pet-event.component';

@NgModule({
  declarations: [
    PetEventComponent,
    PesquisarPetEventComponent
  ],
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
    MatCheckboxModule,
    MatTableModule
  ]
})
export class PetEventModule { }
