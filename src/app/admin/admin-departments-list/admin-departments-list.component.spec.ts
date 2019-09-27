import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartmentsListComponent } from './admin-departments-list.component';

describe('AdminDepartmentsListComponent', () => {
  let component: AdminDepartmentsListComponent;
  let fixture: ComponentFixture<AdminDepartmentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDepartmentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDepartmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
