import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCancelLeaveComponent } from './employee-cancel-leave.component';

describe('EmployeeCancelLeaveComponent', () => {
  let component: EmployeeCancelLeaveComponent;
  let fixture: ComponentFixture<EmployeeCancelLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCancelLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCancelLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
