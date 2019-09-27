import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeesListComponent } from './admin-employees-list.component';

describe('AdminEmployeesListComponent', () => {
  let component: AdminEmployeesListComponent;
  let fixture: ComponentFixture<AdminEmployeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
