import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListLembreteComponent } from './table-list-lembrete.component';

describe('TableListLembreteComponent', () => {
  let component: TableListLembreteComponent;
  let fixture: ComponentFixture<TableListLembreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListLembreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
