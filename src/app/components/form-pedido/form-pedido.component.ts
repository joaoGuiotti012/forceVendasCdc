import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/login/auth.service';
import { User } from '../auth/login/user';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pedido } from 'app/interfaces/pedido';

export interface Cliente {
  codigo: string;
  nome: string;
}

export interface TipoPedido {
  codigo: string;
  nome: string;
}


@Component({
  selector: 'form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})

export class FormPedidoComponent implements OnInit {

  form: FormGroup;

  public pedido: Pedido;

  filteredTipoPedidos: Observable<TipoPedido[]>;
  filteredClientes: Observable<Cliente[]>;

  tipoPedidos: TipoPedido[] = [ {codigo: 'ORB', nome: 'venda' }, { codigo: 'ZRBD', nome: 'Bonificação'} ];
  clientes: Cliente[] = [ {  codigo: '10000', nome: 'Guiotti' }, { codigo: '20000', nome: 'Gabi'  } ];

  public user: User;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {


    this.filteredClientes = this.form.get('clienteCrtl')  .valueChanges
      .pipe(
        startWith(''),
        map(cli => cli ? this._filterClientes(cli) : this.clientes.slice())
    );

    this.filteredTipoPedidos = this.form.controls['tipoPedidoCrtl'].valueChanges
    .pipe(
      startWith(''),
      map( pedido => pedido ? this._filterTipoPedidos(pedido) : this.tipoPedidos.slice() )
    ); 
  }

  ngOnInit(): void {
     this.createFormPedido()
  }

  private _filterClientes(value: string): Cliente[] {
    const filterValue = value.toLowerCase();
    return this.clientes.filter(state => state.nome.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterTipoPedidos( value: string ): TipoPedido[] {
    const filterValue = value.toLocaleLowerCase();
    return this.tipoPedidos.filter( pedido => pedido.codigo.toLowerCase().indexOf(filterValue) === 0 );
  }

  createFormPedido() {
    this.form = this.fb.group({
      'clienteCrtl' : new FormControl( null , [Validators.required]),
      'tipoPedidoCrtl': new FormControl( null , [Validators.required]),
      'dataPrevistaCrtl' : new FormControl (null , [Validators.required]),
    });
  }

  onSubmit(time: number = 5000) {
   
    alert(JSON.stringify(this.form.value));
  }

}
