import { PetComponent } from './pet/pet.component';
import { HistoricoPetproviderComponent } from './historico-petprovider/historico-petprovider.component';
import { ListaServiceContratadosProviderComponent } from './lista-service-contratados-provider/lista-service-contratados-provider.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MenuInicialAdminComponent } from './administrador/menu-inicial-admin/menu-inicial-admin.component';
import { HomeComponent } from './home/home/home.component';
import { CadastroFisicaComponent } from './pessoa/pessoa-fisica/cadastro-fisica/cadastro-fisica.component';
import { CadastroJuridicaComponent } from './pessoa/pessoa-juridica/cadastro-juridica/cadastro-juridica.component';
import { QuemSomosComponent } from './home/quem-somos/quem-somos.component';
import { DetalhesComponent } from './home/home/detalhes/detalhes.component';
import { AprovarPessoaComponent } from './aprovacao/aprovar-pessoa/aprovar-pessoa.component';
import { LoginComponent } from './auth/login/login.component';

import { DeletaPetClientComponent } from './administrador/menu-inicial-admin/deleta-pet-client/deleta-pet-client.component';
import { DeletaPetProviderComponent } from './administrador/menu-inicial-admin/deleta-pet-provider/deleta-pet-provider.component';
import { BuscarPetProviderComponent } from './administrador/menu-inicial-admin/busca-pet-provider/busca-pet-provider.component';
import { BuscarPetClientComponent } from './administrador/menu-inicial-admin/busca-pet-client/busca-pet-client.component';
import { FullCalendarProviderScheduleComponent } from './full-calendar-provider-schedule/full-calendar-provider-schedule.component';
import { AlteraPetClientComponent } from './administrador/menu-inicial-admin/altera-pet-client/altera-pet-client.component';
import { AlteraPetProviderComponent } from './administrador/menu-inicial-admin/altera-pet-provider/altera-pet-provider.component';
import { RoleGuardService as RoleGuard } from './auth/role-guard.service';
import { CriacaoAgendaPetproviderComponent } from './petservice/criacao-agenda-petprovider/criacao-agenda-petprovider.component';
import { TempoAtendimentoAgendaPetproviderComponent } from './petservice/tempo-atendimento-agenda-petprovider/tempo-atendimento-agenda-petprovider.component';
import { ListaOpcoesHorariosServiceDisponiveisComponent } from './lista-opcoes-horarios-service-disponiveis/lista-opcoes-horarios-service-disponiveis.component';
import { ListaServiceContratadosClientComponent } from './lista-service-contratados-client/lista-service-contratados-client.component';
import { HistoricoPetclientComponent } from './historico-petclient/historico-petclient.component';
import { ResultadoComponent } from './home/home/buscar-fornecedores/resultado/resultado.component';
import { PerfilPetProviderComponent } from './perfil/perfil-pet-provider/perfil-pet-provider.component';
import { PerfilPetClientComponent } from './perfil/perfil-pet-client/perfil-pet-client.component';
import { PetEventComponent } from './pet-event/pet-event.component';
import { PesquisarPetEventComponent } from './pet-event/pesquisar-pet-event/pesquisar-pet-event.component';


const routes: Routes = [
    { path: 'home/home', component: HomeComponent},
    { path: 'home/quem-somos', component: QuemSomosComponent},
    { path: 'home/detalhes/:id', component: DetalhesComponent},

    { path: 'home/resultado', component: ResultadoComponent},

    { path: 'login', component: LoginComponent},

    { path: 'aprovacao/pessoa', component: AprovarPessoaComponent},

    { path: 'pessoa/fisica/cadastrar', component: CadastroFisicaComponent},
    { path: 'pessoa/juridica/cadastrar', component: CadastroJuridicaComponent},

    { path: 'administrador/deletar-cliente', component: DeletaPetClientComponent},
    // tslint:disable-next-line: max-line-length
    { path: 'administrador/deletar-fornecedor', component: DeletaPetProviderComponent},

    { path: 'fullcalendar/provider', component: FullCalendarProviderScheduleComponent },

    { path: 'pet-provider/meu-perfil', component: PerfilPetProviderComponent},
    { path: 'pet-client/meu-perfil', component: PerfilPetClientComponent, canActivate: [RoleGuard], data: {expectedRole: 'CLIENTE'}},

    // tslint:disable-next-line: max-line-length
    // { path: 'agendar/criacao-petprovider', component: CriacaoAgendaPetproviderComponent, canActivate: [RoleGuard], data: {expectedRole: 'SERVICO'}},
    // tslint:disable-next-line: max-line-length
    { path: 'agendar/criacao-petprovider', component: CriacaoAgendaPetproviderComponent},
    // tslint:disable-next-line: max-line-length
    { path: 'contratados/petprovider', component: ListaServiceContratadosProviderComponent},
    // tslint:disable-next-line: max-line-length
    { path: 'contratados/petclient', component: ListaServiceContratadosClientComponent},

    { path: 'historico/petclient', component: HistoricoPetclientComponent},
    { path: 'historico/petprovider', component: HistoricoPetproviderComponent},

    { path: 'agendamento-pet-service/agendamento-pet-service/:id', component: ListaOpcoesHorariosServiceDisponiveisComponent},

    { path: 'pets', component: PetComponent},
    { path: 'petevent', component: PetEventComponent},
    { path: 'buscar/petevent', component: PesquisarPetEventComponent},

    { path: '', pathMatch: 'full', redirectTo: '/home/home'},
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
