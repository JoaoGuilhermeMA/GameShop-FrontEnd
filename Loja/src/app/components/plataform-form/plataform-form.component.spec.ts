import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformFormComponent } from './plataform-form.component';

describe('PlataformFormComponent', () => {
  let component: PlataformFormComponent;
  let fixture: ComponentFixture<PlataformFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlataformFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlataformFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
