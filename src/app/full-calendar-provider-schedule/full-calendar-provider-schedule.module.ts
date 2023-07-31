import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarProviderScheduleComponent } from './full-calendar-provider-schedule.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FullCalendarProviderScheduleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FullCalendarModule
  ],
  exports: [
    FullCalendarProviderScheduleComponent
  ]
})
export class FullCalendarProviderScheduleModule { }
