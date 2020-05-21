import { Component, ViewChild, OnInit} from '@angular/core';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  ngOnInit() {
    this.errorMsgComponent.setError('Mensagem de erro');
  }
}
