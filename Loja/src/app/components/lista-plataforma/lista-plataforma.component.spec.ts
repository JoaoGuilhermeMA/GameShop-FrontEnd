import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlataformaComponent } from './lista-plataforma.component';

describe('ListaPlataformaComponent', () => {
  let component: ListaPlataformaComponent;
  let fixture: ComponentFixture<ListaPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPlataformaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
