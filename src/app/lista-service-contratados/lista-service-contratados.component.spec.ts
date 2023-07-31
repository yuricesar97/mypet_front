import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServiceContratadosComponent } from './lista-service-contratados.component';

describe('ListaServiceContratadosComponent', () => {
  let component: ListaServiceContratadosComponent;
  let fixture: ComponentFixture<ListaServiceContratadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaServiceContratadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServiceContratadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
