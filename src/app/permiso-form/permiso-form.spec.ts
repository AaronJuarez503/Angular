import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoForm } from './permiso-form';

describe('PermisoForm', () => {
  let component: PermisoForm;
  let fixture: ComponentFixture<PermisoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
