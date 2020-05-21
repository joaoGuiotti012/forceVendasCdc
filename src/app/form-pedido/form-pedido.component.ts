import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { Pedido } from 'app/interfaces/pedido';


/** Error when invalid control is dirty, touched, or submitted. */
export class IsError implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})

export class FormPedidoComponent implements OnInit {
  

  emailCrt = new FormControl('', [ Validators.required, Validators.email, ]);
  cnpjCrt = new FormControl('', [ Validators.required ]);
  codCliCrt = new FormControl( '', [ Validators.required ]);
  tipoPedidoCrt = new FormControl('', [ Validators.required ]);

  status = new IsError();

  isValid(): boolean {
    return this.cnpjCrt.invalid || this.tipoPedidoCrt.invalid || this.codCliCrt.invalid;
  }

  constructor() { }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onSubmit() {
    console.log(this.cnpjCrt.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter( option => option.toLowerCase().indexOf(filterValue) === 0 );
  }

}
