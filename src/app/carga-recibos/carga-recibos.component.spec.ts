import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaRecibosComponent } from './carga-recibos.component';

describe('CargaRecibosComponent', () => {
  let component: CargaRecibosComponent;
  let fixture: ComponentFixture<CargaRecibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaRecibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
