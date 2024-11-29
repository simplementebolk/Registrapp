import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudasistenciaPage } from './crudasistencia.page';

describe('CrudasistenciaPage', () => {
  let component: CrudasistenciaPage;
  let fixture: ComponentFixture<CrudasistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudasistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
