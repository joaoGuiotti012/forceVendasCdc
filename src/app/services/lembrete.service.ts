import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})

export class LembreteService {
  private url: 'http://localhost:8090';
  constructor( private  http: HttpClient ) { }

  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${this.url}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

}
