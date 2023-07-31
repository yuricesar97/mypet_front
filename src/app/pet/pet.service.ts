import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';

const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  public salvarPet(varPet: Pet): Observable<Pet> {
    return this.http.post<Pet>(API + '/pets', varPet);
  }

  public buscarPets(idCliente: number): Observable <Pet[]>{
    return this.http.get<Pet[]>(API + '/pets/idPetcliente?value=' + idCliente);
  }

  buscarEmailLoginConjunto(email: string): Observable<any> {
    return this.http.get(API + '/loginConjunto/email?value=' + email);
  }

  buscarTodosPets(): Observable <Pet[]>{
    return this.http.get<Pet[]>(API + '/pets');
  }

  excluirPet(varPet: Pet){
    return this.http.delete(API + '/pets/' + varPet.id);
  }

  alterarPet(varPet: Pet){
    return this.http.put(API + '/pets/' + varPet.id, varPet);
  }
}
