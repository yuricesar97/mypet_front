import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PanelModule, DataTableModule, ToggleButtonModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { ListaOpcoesHorariosServiceDisponiveisComponent } from './lista-opcoes-horarios-service-disponiveis.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    ListaOpcoesHorariosServiceDisponiveisComponent
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
    FormsModule,
    ButtonModule,
    ToggleButtonModule,
    MatListModule
  ],
  exports: [
    ListaOpcoesHorariosServiceDisponiveisComponent
  ]
})
export class ListaOpcoesHorariosServiceDisponiveisModule { }
