import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagerEmployeesComponent } from './admin-manager-employees.component';

describe('AdminManagerEmployeesComponent', () => {
  let component: AdminManagerEmployeesComponent;
  let fixture: ComponentFixture<AdminManagerEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagerEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagerEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
