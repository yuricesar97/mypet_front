import { AuthService } from '../auth.service';

import { Component, OnInit,  } from '@angular/core';
import { Credentials } from '../credentials/credentials';
import { error } from '@angular/compiler/src/util';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  credentials: Credentials = new Credentials('', '');


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login(): void {

    this.authService.login(this.credentials);
    error => {}
  }

}

