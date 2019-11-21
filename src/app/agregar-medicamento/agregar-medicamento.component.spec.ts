import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMedicamentoComponent } from './agregar-medicamento.component';

describe('AgregarMedicamentoComponent', () => {
  let component: AgregarMedicamentoComponent;
  let fixture: ComponentFixture<AgregarMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
