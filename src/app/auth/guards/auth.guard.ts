
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let url: string = state.url;
    return this.checkLogin(url); // verifica se estão logados, se não redirecionar login
  }


  private checkLogin(url: string): boolean {
    if(this.authService.isLoggedIn()) { // verificando caminho que usuario esta tentado acessar, se negado volta login
      return true;
    }
    //this.authService.redirectToUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}

