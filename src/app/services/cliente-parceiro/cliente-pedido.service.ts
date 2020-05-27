import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientePedido } from 'app/interfaces/cliente-pedido';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClientePedidoService {

  constructor( private http: HttpClient ) { }

  getListClienteParceiro( cnpj: string ): Observable<ClientePedido[]> {
    const url = `/${cnpj}`;
    return this.http.get<ClientePedido[]>(url);
  }

  getAll(): Observable<ClientePedido[]> {
    const url = `${environment.forceVendaApiURL}/fvcdc/all`;
    return this.http.get<ClientePedido[]>('/fvcli/all');
  } 

}
