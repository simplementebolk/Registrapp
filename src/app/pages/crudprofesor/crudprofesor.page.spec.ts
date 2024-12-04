import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudprofesorPage } from './crudprofesor.page';

describe('CrudprofesorPage', () => {
  let component: CrudprofesorPage;
  let fixture: ComponentFixture<CrudprofesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
