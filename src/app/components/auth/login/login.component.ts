import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
 
  public user: User = new User();

  constructor(  private authService: AuthService ) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.user);
    
    this.authService.logar(this.user);
  }

  

}
