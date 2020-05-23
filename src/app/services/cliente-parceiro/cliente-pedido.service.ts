import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientePedido } from 'app/interfaces/cliente-pedido';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientePedidoService {
  private url: string = 'http://v16-ti05:8098/fvcdc/stcd/';
  constructor( private http: HttpClient) { }

  getListClienteParceiro(cnpj: string ): Observable<ClientePedido[]> {
    const url = `${this.url}${cnpj}`;
    return this.http.get<ClientePedido[]>(url);
  }

  getal(): Observable<ClientePedido[]> {
    const url = `${this.url}all`;
    return this.http.get<ClientePedido[]>(url);
  }

}
