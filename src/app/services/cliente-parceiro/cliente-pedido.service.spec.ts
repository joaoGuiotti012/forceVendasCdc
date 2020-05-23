import { TestBed } from '@angular/core/testing';

import { ClientePedidoService } from './cliente-pedido.service';

describe('ClientePedidoService', () => {
  let service: ClientePedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientePedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
