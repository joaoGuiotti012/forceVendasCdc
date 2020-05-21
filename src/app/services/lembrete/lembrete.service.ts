import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../../interfaces/lembrete';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LembreteService {
  constructor( private  http: HttpClient ) { }

  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.forceVendaApiURL}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.forceVendaApiURL}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.forceVendaApiURL}/lembrete/novo`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  updateLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.forceVendaApiURL}/lembrete/update/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);

  }

  deleteLebrete(id: number ): Observable<Lembrete> {
    const url = `${environment.forceVendaApiURL}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }

}
