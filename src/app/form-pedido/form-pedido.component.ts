import { Component, OnInit, Input  } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { Lembrete } from 'app/interfaces/lembrete';
import { LembreteService } from 'app/services/lembrete/lembrete.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ClientePedido } from 'app/interfaces/cliente-pedido';
import { ClientePedidoService } from 'app/services/cliente-parceiro/cliente-pedido.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class IsError implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})

export class FormPedidoComponent implements OnInit {
  @Input() lembrete: Lembrete = <Lembrete>{};


  public clientePedido: ClientePedido[];
  
  status = new IsError();

  /*isValid(): boolean {
    return this.cnpjCrt.invalid || this.tipoPedidoCrt.invalid || this.codCliCrt.invalid;
  }*/

  constructor(private lembreteService: LembreteService , private clientePedidoService: ClientePedidoService, 
    private _snackBar: MatSnackBar ) { }

  myControl = new FormControl();
  options: string[] = ['ALTA','MEDIA', 'BAIXA' ];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onSubmit() {
    this.addLembrete(this.lembrete);
  }

  addLembrete(lembrete: Lembrete) {
    console.log(lembrete);
    
    this.lembreteService.addLembrete(lembrete)
      .subscribe(
        () => { this.message( 'adicionado com sucesso !', 'fechar' ); },
        () => { alert('404'); }
      );
  }



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter( option => option.toLowerCase().indexOf(filterValue) === 0 );
  }

  message(message: string, action: string = null , time: number = 5000) {
    this._snackBar.open(message, action , {
      duration: time, 
    });
  }

}
