import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOpcoesHorariosServiceDisponiveisComponent } from './lista-opcoes-horarios-service-disponiveis.component';

describe('ListaOpcoesHorariosServiceDisponiveisComponent', () => {
  let component: ListaOpcoesHorariosServiceDisponiveisComponent;
  let fixture: ComponentFixture<ListaOpcoesHorariosServiceDisponiveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOpcoesHorariosServiceDisponiveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOpcoesHorariosServiceDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
