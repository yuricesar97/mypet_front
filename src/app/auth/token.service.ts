import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Credentials } from 'src/app/auth/credentials/credentials';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};
const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  public getResponseHeaders(credentials: Credentials) {
    let loginUrl = API_URL + '/login';
    console.log("loginUrl: " + loginUrl);
    return this.http.post(loginUrl, credentials, httpOptions);
  }

  public logout() {
    let logoutUrl = API_URL + '/logout';
    return this.http.get(logoutUrl, {responseType: 'text'});
  }
}
