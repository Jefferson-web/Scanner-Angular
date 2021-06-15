import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGuiasComponent } from './lista-guias.component';

describe('ListaGuiasComponent', () => {
  let component: ListaGuiasComponent;
  let fixture: ComponentFixture<ListaGuiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGuiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
