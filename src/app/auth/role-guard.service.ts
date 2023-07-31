import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class RoleGuardService implements CanActivate {
  

  public pessoa: any

  constructor(public auth: AuthService, public router: Router, public buscaEmail: PessoaService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data.expectedRole;  
    const token = localStorage.getItem("localUser")
    var obj = JSON.parse(token)

    this.buscaEmail.buscarEmailLoginConjunto(obj.email).subscribe((perfil) => {
      this.pessoa = perfil

      if (!this.auth.isLoggedIn() || this.pessoa.perfil !== expectedRole) {
        this.router.navigate(['login']);
        return false;
    }
      if(this.pessoa.perfil == "SERVICO"){
        this.router.navigate(['login/tela-inicial-pet-provider']);
      }
      
    })   
    return true; 
  }
}