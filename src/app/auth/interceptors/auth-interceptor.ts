import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { LocalUser } from '../credentials/local_user';
import { StorageService } from '../storage.service';
import { API_CONFIG } from '../config/api.config';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(public storage: StorageService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

      let LocalUser = this.storage.getLocalUser();
      let N = API_CONFIG.baseUrl.length;
      let requestAPI = req.url.substring(0,N) == API_CONFIG.baseUrl;

      if(LocalUser && requestAPI){
        const authReq =req.clone({headers: req.headers.set('Authorization', 'Bearer ' + LocalUser.token)});
        return next.handle(authReq);

      }
      else{
        return next.handle(req);
      }


    }

}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
}
