import { Component, OnInit } from '@angular/core';
import { PetEvent } from '../pet-event';
import { PetEventService } from '../pet-event.service';

@Component({
  selector: 'app-pesquisar-pet-event',
  templateUrl: './pesquisar-pet-event.component.html',
  styleUrls: ['./pesquisar-pet-event.component.css']
})
export class PesquisarPetEventComponent implements OnInit {

  eventos: PetEvent[] = [];

  constructor(private serviceEvent: PetEventService) { }

  ngOnInit() {
    this.serviceEvent.buscarEventos().subscribe(res => {
      this.eventos = res
      //alert(JSON.stringify(this.eventos))
    })
  }

}
