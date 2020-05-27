import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientePedidoComponent } from './table-cliente-pedido.component';

describe('TableClientePedidoComponent', () => {
  let component: TableClientePedidoComponent;
  let fixture: ComponentFixture<TableClientePedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableClientePedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClientePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
