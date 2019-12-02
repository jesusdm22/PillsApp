import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCompraComponent } from './ticket-compra.component';

describe('TicketCompraComponent', () => {
  let component: TicketCompraComponent;
  let fixture: ComponentFixture<TicketCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
