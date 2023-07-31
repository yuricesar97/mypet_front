import { Component, OnInit } from '@angular/core';
import { PetEventService } from './pet-event.service';
import { PetEvent } from './pet-event';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-event',
  templateUrl: './pet-event.component.html',
  styleUrls: ['./pet-event.component.css']
})
export class PetEventComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'local', 'data', 'start', 'end'];
  public varPessoa;
  public varEvent: PetEvent = new PetEvent;
  public listaEvents: PetEvent[] = [];
  public aux: PetEvent[] = [];
  id: number;

  constructor(
    private serviceEvent: PetEventService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceEvent.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPessoa = retorno;
      this.id = this.varPessoa.id
    });

    this.serviceEvent.buscarEventos().subscribe((ret) => {
        this.listaEvents = ret;
      })


  }

  f = this.formBuilder.group({
    'title': ['', Validators.required],
    'description': ['', Validators.required],
    'local': ['', Validators.required],
    'data': ['', Validators.required],
    'start': ['', Validators.required],
    'end': ['', Validators.required],
  })

  salvarPetEvent(varEvent: PetEvent) {
    if (this.varPessoa.perfil == "CLIENTE") {
      this.varEvent.nomeCliente = this.varPessoa.nomeCompleto;
      this.varEvent.idCliente = this.varPessoa.id;
    }
    else {
      this.varEvent.nomeProvider = this.varPessoa.razaoSocial;
      this.varEvent.idProvider = this.varPessoa.id;
    }

    this.serviceEvent.salvarEvento(varEvent).subscribe(res => {
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Evento publicado!',
        text: 'Seu evento foi publicado com sucesso!',
        showConfirmButton: false,
        timer: 3000
      });
      setTimeout(() => {
        location.reload();
      }, 1000);
    });

  }

}
