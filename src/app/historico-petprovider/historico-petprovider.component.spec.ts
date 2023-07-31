import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPetproviderComponent } from './historico-petprovider.component';

describe('HistoricoPetproviderComponent', () => {
  let component: HistoricoPetproviderComponent;
  let fixture: ComponentFixture<HistoricoPetproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoPetproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPetproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
