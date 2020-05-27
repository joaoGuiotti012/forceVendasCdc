import { Injectable , EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  static userLogonEmitter = new EventEmitter<User>();
  private isLogged: boolean = false;

  loggedEmitter = new EventEmitter<boolean>();
  userEmitter = new EventEmitter<User>();

  
  constructor( private router: Router) { }

  

  logar(user: User) {

    if ( user.cnpj === '47498416840' && user.password === 'Conti2019' ) {
      user.nome = 'João Guiotti';
      
      this.isLogged = true;
      this.loggedEmitter.emit(true);
      this.userEmitter.emit(user);
      AuthService.userLogonEmitter.emit(user);
      this.router.navigate(['/dashboard']);
      
    } else {
      this.isLogged = false;
      this.loggedEmitter.emit(false);
      this.userEmitter.emit(null);

    }

  }
}
