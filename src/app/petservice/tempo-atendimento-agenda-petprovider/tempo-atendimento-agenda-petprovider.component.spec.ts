import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoAtendimentoAgendaPetproviderComponent } from './tempo-atendimento-agenda-petprovider.component';

describe('TempoAtendimentoAgendaPetproviderComponent', () => {
  let component: TempoAtendimentoAgendaPetproviderComponent;
  let fixture: ComponentFixture<TempoAtendimentoAgendaPetproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempoAtendimentoAgendaPetproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoAtendimentoAgendaPetproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
