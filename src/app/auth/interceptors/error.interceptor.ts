import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { StorageService } from '../storage.service';
import Swal from 'sweetalert2';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  constructor(public storage:StorageService,
              ){

  }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        return next.handle(req)
                .pipe(
                    catchError(error => {
                        let errorObj = error;
                        if(errorObj.error ){

                           errorObj = errorObj.error;
                        }
                        if(!errorObj.status){
                            errorObj = JSON.parse(errorObj);
                        }


                     //   this.toasty.error(errorObj);
                       // alert("Passou");
                        console.log("Erro usuário");
                        console.log(errorObj);

                        switch(errorObj.status){
                          case 403:
                            this.handler403();
                            break;
                        }
                        switch(errorObj.status){
                          case 401:

                          if(errorObj.message === "Email ou senha inválidos"){
                            this.handler401();
                            break;
                          }


                        }

                        switch(errorObj.status){
                          case 500:

                          if(errorObj.path === "/pessoafisica"){
                            this.handlerFonecedor();
                            break;
                          }


                        }

                        switch(errorObj.status){
                          case 400:

                          if(errorObj.msg === "Somente imagens PNG e JPG são permitidas"){
                            this.handler400();
                            break;
                          }


                        }

                        switch(errorObj.status){
                          case 500:

                          if(errorObj.path === "/pessoajuridica"){
                            this.handlerCliente();
                            break;
                          }


                        }

                        switch(errorObj.status){
                          case 404:

                          if(errorObj.errors[0].message === "Email já existente" ){
                            this.handler404();

                          }
                           if(errorObj.errors[0].message === "cpf invalido"){
                            this.handlerCpf();
                          }
                        }
                        return Observable.throw(errorObj);
                        })) as any;

            }
            handler403(){
              this.storage.setLocalUser(null);

            }
            handler401(){
              Swal.fire(
                'Email ou senha inválidos'
              )

            }

            handler404(){
              Swal.fire(
                'Email Já cadastrado'
              )

            }

            handler400(){
              Swal.fire(
                'Somente imagens PNG e JPG são permitidas'
              )
            }

            handlerCpf(){
              Swal.fire(
                'CPF ou CNPJ incorreto'
              )
              }
              handlerFonecedor(){
                Swal.fire(
                  'Utilize outro',
                  'Email já cadastrado em Fornecedor',

                )

            }

            handlerCliente(){
              Swal.fire(
                'Utilize outro',
                'Email já cadastrado em CLIENTE',

              )

          }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
}
