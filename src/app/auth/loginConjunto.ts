export class LoginConjunto{
  id: number;
  email: string;
  senha:string;
  active:boolean;

   constructor(){
       this.id = 0;
       this.email = "";
       this.senha = "";
       this.active = true;
   }
}
