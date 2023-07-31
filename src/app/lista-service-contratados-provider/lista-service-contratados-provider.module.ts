import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule, DataTableModule, PanelModule, TabViewModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaServiceContratadosProviderComponent } from './lista-service-contratados-provider.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ListaServiceContratadosProviderComponent
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
    MatTreeModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],

  exports: [
    ListaServiceContratadosProviderComponent
  ],

})
export class ListaServiceContratadosProviderModule { }
