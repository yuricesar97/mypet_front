import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { ResultadoComponent } from './home/buscar-fornecedores/resultado/resultado.component';
import { DetalhesComponent } from './home/detalhes/detalhes.component';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { BuscarFornecedoresComponent } from './home/buscar-fornecedores/buscar-fornecedores.component';
import {DropdownModule} from 'primeng/dropdown';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule, MatButtonModule, MatDialogModule} from '@angular/material';
import { CardsComponent } from './cards/cards.component';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {RatingModule} from 'primeng/rating';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FilterPipe } from './home/buscar-fornecedores/resultado/filter.pipe';

@NgModule({
  declarations: [
    QuemSomosComponent,
    HomeComponent,
    ResultadoComponent,
    DetalhesComponent,
    BuscarFornecedoresComponent,
    CardsComponent,
    FilterPipe

  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    CardModule,
    CheckboxModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatStepperModule,
    MatDialogModule,
    RatingModule,
    MatCheckboxModule

  ],
  exports: [
    QuemSomosComponent,
    HomeComponent,
    ResultadoComponent,
    DetalhesComponent,
    FilterPipe
  ]
})
export class HomeModule { }
