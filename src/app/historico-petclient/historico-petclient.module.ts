import { HistoricoPetclientComponent } from './historico-petclient.component';
import { FormsModule } from '@angular/forms';
import { PanelModule, ButtonModule, DataTableModule, ToggleButtonModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HistoricoPetclientComponent
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
    RatingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    HistoricoPetclientComponent
  ]
})
export class HistoricoPetclientModule { }
