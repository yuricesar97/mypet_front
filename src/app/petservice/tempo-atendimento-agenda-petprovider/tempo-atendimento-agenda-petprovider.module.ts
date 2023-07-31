import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { TempoAtendimentoAgendaPetproviderComponent } from './tempo-atendimento-agenda-petprovider.component';
import { CheckboxModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    TempoAtendimentoAgendaPetproviderComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    TempoAtendimentoAgendaPetproviderComponent
  ]
})
export class TempoAtendimentoAgendaPetproviderModule { }
