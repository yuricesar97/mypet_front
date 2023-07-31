/**

import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';
import {HttpHandler, HttpRequest, HttpEvent, HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ErrorInterceptor } from './error.interceptor';


@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error("Method not implemented.");
  }

  constructor(public auth: AuthService, private router: Router) {}
/**
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request  = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    return next.handle(request);
  }


  private handleErrors(err: HttpErrorResponse): Observable<any> {

    if (err instanceof HttpErrorResponse) {
    if (err.status === 401) {
      this.router.navigate(['/login']);
      return of (err.message); // caso erro 401 retornar para login
    }
  }
}

}

export const ErrorJwtProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
}


*/
