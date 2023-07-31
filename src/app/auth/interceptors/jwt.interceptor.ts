
import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';
import {HttpHandler, HttpRequest, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';


// ...
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService,private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        window.location.href = 'home/home';
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          alert("asdFWQQWD");
          console.log("Passou");
          this.auth.collectFailedRequest (request);

        }
      }
    });
  }
}

