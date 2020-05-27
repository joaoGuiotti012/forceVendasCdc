import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientePedidoService } from 'app/services/cliente-parceiro/cliente-pedido.service';
import { ClientePedido } from 'app/interfaces/cliente-pedido';
import { ErrorMsgComponent } from '../error-msg/error-msg.component';

@Component({
  selector: 'table-cliente-pedido',
  templateUrl: './table-cliente-pedido.component.html',
  styleUrls: ['./table-cliente-pedido.component.css']
})
export class TableClientePedidoComponent implements OnInit {
  public clientePedidos: ClientePedido[];
  public paginaAtual = 1;
  isLoading : boolean = true;



  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private clientePedidoService: ClientePedidoService) { }

  ngOnInit(): void {
    
    this.getClientesPedidos();
  }

  getClientesPedidos() {
    this.clientePedidoService.getAll().subscribe(
      (  _clientePedidos: ClientePedido[] ) => {
        this.clientePedidos = _clientePedidos;
        this.isLoading = false;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar registros !'); });
  }

  // getAll()

  existClientesPedido(): boolean {
    return this.clientePedidos && this.clientePedidos.length > 0;

  }

}
