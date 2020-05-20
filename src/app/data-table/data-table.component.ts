import { Component, OnInit } from '@angular/core';
import { Lembrete } from 'app/interfaces/lembrete';
import { LembreteService } from 'app/services/lembrete.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  //public lembretes: Lembrete[];

  constructor() { }

  ngOnInit() {
    //this.getListaLembretes();
  }
 /*
  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      .subscribe( (lembrtes: Lembrete[]) => {
        this.lembretes = lembrtes;
      });
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }
 */
}
