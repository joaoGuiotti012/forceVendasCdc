import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Pedido } from 'app/interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor( private http: HttpClient ) { }

  getListPedidos(): Observable<Pedido[]> {
    const url = `${environment.forceVendaApiURL}/pedidos`;
    return this.http.get<Pedido[]>(url);
  }

  

  getPedido( id: number ): Observable<Pedido> {
    const url = `${environment.forceVendaApiURL}/pedido${id}`;
    return this.http.get<Pedido>(url);
  }

  addPedido( pedido: Pedido ) {
    const url = `${environment.forceVendaApiURL}/pedido/novo`;
    return this.http.post<Pedido>(url, pedido);
  }
  

}
 