import { LeaveBalance } from './leave-balance';
import { Department } from './department';
import { Login } from './login';

export class Employee {
    last_name : string;
    first_name : string;
    email : string;
    address : string;
    employee_id : string;
    salary : number;
    pf : number;
    leave_balance? : LeaveBalance;
    department? : Department;
    login? : Login;
}
