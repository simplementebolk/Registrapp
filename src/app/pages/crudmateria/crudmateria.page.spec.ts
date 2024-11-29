import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudmateriaPage } from './crudmateria.page';

describe('CrudmateriaPage', () => {
  let component: CrudmateriaPage;
  let fixture: ComponentFixture<CrudmateriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudmateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
