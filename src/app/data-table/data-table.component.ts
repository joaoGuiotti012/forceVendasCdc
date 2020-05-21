import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'app/components/error-msg/error-msg.component';
import { LembreteService } from 'app/services/lembrete.service';
import { Lembrete } from 'app/interfaces/lembrete';

declare var $: any;
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  public lembretes: Lembrete[];

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit() {
    this.getListaLembretes();
  }
  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      .subscribe( (lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar os registros !'); });
  }

  deletaLembrete(id: number ) {
    this.lembreteService.deleteLebrete(id)
      .subscribe(() => {
        this.getListaLembretes();
      }, () => { this.errorMsgComponent.setError('Falha ao buscar !'); } );
  }

  existeLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }

}
