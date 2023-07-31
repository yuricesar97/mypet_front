import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarPessoaComponent } from './aprovar-pessoa.component';

describe('AprovarPessoaComponent', () => {
  let component: AprovarPessoaComponent;
  let fixture: ComponentFixture<AprovarPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
