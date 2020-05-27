import { Component, ViewChild, OnInit} from '@angular/core';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { AuthService } from './components/auth/login/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private authService: AuthService){

  }

  ngOnInit() {
   
    
    this.errorMsgComponent.setError('Mensagem de erro');
  }


}
