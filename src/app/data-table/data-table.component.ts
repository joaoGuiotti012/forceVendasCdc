import { Component, ViewChild, OnInit } from '@angular/core';
import { ErrorMsgComponent } from 'app/components/error-msg/error-msg.component';
import { LembreteService } from 'app/services/lembrete/lembrete.service';
import { Lembrete } from 'app/interfaces/lembrete';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

declare var $: any;
@Component({
  selector: 'lembrete-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit {

  public lembretes: Lembrete[];
  isLoading : boolean = true;
  public paginaAtual = 1;

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService ,
              private formBuilder: FormBuilder,
              private router: Router,
              public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getListaLembretes()
  }
  
  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      .subscribe( (lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
        this.isLoading = false ;
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

export class DialogContentExampleDialog {}