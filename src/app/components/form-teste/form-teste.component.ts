import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { ClientePedidoService } from 'app/services/cliente-parceiro/cliente-pedido.service';
import { ClientePedido } from 'app/interfaces/cliente-pedido';


@Component({
  selector: 'app-form-teste',
  templateUrl: './form-teste.component.html',
  styleUrls: ['./form-teste.component.css']
})
export class FormTesteComponent implements OnInit {
  public ClientePedido: ClientePedido[];

  @Input() cnpj: string;
  @Output() outputcnpj: EventEmitter<String> = new EventEmitter();

  constructor(private clientePedidoService: ClientePedidoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
   this.getListaClientePedido( this.cnpj );
   this.getall();
   
  }

  getListaClientePedido( cnpj: string ) {
    this.clientePedidoService.getListClienteParceiro(cnpj)
      .subscribe( (_clientePedido: ClientePedido[] ) =>  {
        this.ClientePedido = _clientePedido;
        console.log(_clientePedido.values);
        
      }, null );
  }
  getall() {
    this.clientePedidoService.getAll()
    .subscribe( (_clientePedido: ClientePedido[] ) =>  {
      this.ClientePedido = _clientePedido;
      console.log(_clientePedido.values);

    }, null)
  }

}
