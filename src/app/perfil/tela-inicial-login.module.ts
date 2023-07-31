import { NgModule } from '@angular/core';
import {MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule, ButtonModule, DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PerfilPetClientComponent } from './perfil-pet-client/perfil-pet-client.component';
import { PerfilPetProviderComponent } from './perfil-pet-provider/perfil-pet-provider.component';
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
  declarations: [
    PerfilPetClientComponent,
    PerfilPetProviderComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    TabViewModule,
    PanelModule,
    FormsModule,
    ButtonModule,
    DataTableModule,
    TableModule,
    BrowserAnimationsModule,
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
    ReactiveFormsModule
  ]
})
export class TelaInicialLoginModule { }
