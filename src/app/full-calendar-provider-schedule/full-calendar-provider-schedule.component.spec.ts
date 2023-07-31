import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCalendarProviderScheduleComponent } from './full-calendar-provider-schedule.component';

describe('FullCalendarProviderScheduleComponent', () => {
  let component: FullCalendarProviderScheduleComponent;
  let fixture: ComponentFixture<FullCalendarProviderScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCalendarProviderScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCalendarProviderScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
