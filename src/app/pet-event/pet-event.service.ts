import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetEvent } from './pet-event';

const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PetEventService {

  constructor(private http: HttpClient) { }

  buscarEmailLoginConjunto(email: string): Observable<any> {
    return this.http.get(API + '/loginConjunto/email?value=' + email);
  }

  salvarEvento(evento: PetEvent): Observable <PetEvent>{
    return this.http.post<PetEvent>(API + '/petevent', evento)
  }

  buscarEventos(): Observable <PetEvent[]>{
    return this.http.get<PetEvent[]>(API + '/petevent')
  }
}
