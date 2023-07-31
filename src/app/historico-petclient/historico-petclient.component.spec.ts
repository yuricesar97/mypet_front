import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPetclientComponent } from './historico-petclient.component';

describe('HistoricoPetclientComponent', () => {
  let component: HistoricoPetclientComponent;
  let fixture: ComponentFixture<HistoricoPetclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoPetclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPetclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
