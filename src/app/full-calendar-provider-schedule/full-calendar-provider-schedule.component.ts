import { Component, OnInit, Input, ViewChild } from '@angular/core';


import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import { FullCalendarProviderScheduleService } from './full-calendar-provider-schedule.service';
import { EventProvider } from './eventProvider';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-full-calendar-provider-schedule',
  templateUrl: './full-calendar-provider-schedule.component.html',
  styleUrls: ['./full-calendar-provider-schedule.component.css']
})
export class FullCalendarProviderScheduleComponent implements OnInit {

varCalendarDaySchedule: FullCalendarProviderScheduleService;
@ViewChild('calendar') calendarComponent: FullCalendarComponent;

calendarVisible = true;
calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
calendarWeekends = true;
calendarEvents: EventInput[] = [
  {
    title: 'titulos',
    description:'des',
    start:'2019-09-06',
     end:'2019-09-10'

  },

];

@Input() pessoas: EventProvider[] = [];
        banco: EventProvider[]=[];

  constructor(private event1: FullCalendarProviderScheduleService,private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.router = router;

  }


  ngOnInit() {
     this.calendarEvents.push(this.event1.listEvent().subscribe(pessoa => this.pessoas = pessoa))
  //   $('#full-calendar-provider-schedule').fullCalendar(
  //     this.defaultConfigurations
  //  );
  }



 eventDragStart(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag start');
 }
 eventDragStop(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag end');
 }

 toggleVisible() {
  this.calendarVisible = !this.calendarVisible;
}

toggleWeekends() {
  this.calendarWeekends = !this.calendarWeekends;
}

gotoPast() {
  let calendarApi = this.calendarComponent.getApi();
  calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object

}

handleDateClick(arg) {
  var nameTitle = prompt('Qual é o nome do evento ? ', '');
  if (confirm('Gostaria de adicionar um evento no dia ' + arg.dateStr + ' ?')) {
    this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
      title: nameTitle,
      start: arg.date,
      allDay: arg.allDay,


    }

    );
  }
  alert(JSON.stringify(this.getEvents()));
}

getEvents(): EventInput[] {

  alert(JSON.stringify(this.calendarEvents));
  return this.calendarEvents
}

public listUser(){

 // console.log(this.event1.listEvent().subscribe(eventMarcado => this.pessoas = eventMarcado));

}

}
