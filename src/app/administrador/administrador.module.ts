import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInicialAdminComponent } from './menu-inicial-admin/menu-inicial-admin.component';
import {MenuModule } from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { PanelModule, DataTableModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { DeletaPetClientComponent } from './menu-inicial-admin/deleta-pet-client/deleta-pet-client.component';
import { FiltroPeloNome } from './menu-inicial-admin/deleta-pet-client/filtro-pelo-nome.pipe';
import { TableModule } from 'primeng/table';
import { DeletaPetProviderComponent } from './menu-inicial-admin/deleta-pet-provider/deleta-pet-provider.component';
import { BuscarPetProviderComponent } from './menu-inicial-admin/busca-pet-provider/busca-pet-provider.component';
import { TabelaBuscarPetProviderComponent } from './menu-inicial-admin/busca-pet-provider/tabela-busca-pet-provider/tabela-busca-pet-provider.component';
import { BuscarPetClientComponent } from './menu-inicial-admin/busca-pet-client/busca-pet-client.component';
import { TabelaBuscarPetClientsComponent } from './menu-inicial-admin/busca-pet-client/tabela-busca-pet-clients/tabela-busca-pet-clients.component';
import { AlteraPetClientComponent } from './menu-inicial-admin/altera-pet-client/altera-pet-client.component';
import { AlteraPetProviderComponent } from './menu-inicial-admin/altera-pet-provider/altera-pet-provider.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MenuInicialAdminComponent,
    DeletaPetClientComponent,
    FiltroPeloNome,
    DeletaPetProviderComponent,
    BuscarPetProviderComponent,
    TabelaBuscarPetProviderComponent,
    BuscarPetClientComponent,
    TabelaBuscarPetClientsComponent,
    AlteraPetClientComponent,
    AlteraPetProviderComponent
    

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
    MatButtonModule
  ]
})
export class AdministradorModule { }
