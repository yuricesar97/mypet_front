import { Observable } from 'rxjs';
import { ServiceContratados } from './lista-service-contratados';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ListaServiceContratadosService {

  constructor(private http: HttpClient) { }

  public salvarEmServicosContratados(varContratadosAgendaProvider: ServiceContratados): Observable<ServiceContratados> {
    return this.http.post<ServiceContratados>(API + '/contratadoprovider', varContratadosAgendaProvider);
  }
}
