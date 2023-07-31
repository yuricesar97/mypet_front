import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EventProvider } from './eventProvider';


const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class FullCalendarProviderScheduleService {

  constructor(private http: HttpClient) { }

  listEvent() {
    alert("PASSOU");

    return this.http.get<EventProvider[]>(API + '/calendar');

}

  saveServiceProvider() {
    //ADICIONAR MODEL NO BACKEND
    //const url = `${API}/pessoafisica/${}`;
    //return this.http.post(url);
  }

}
