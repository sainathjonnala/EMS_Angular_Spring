import { Employee } from './employee';

export class Leave {
    leave_id? : string;
	leave_type : string;
    from_date : Date;
    to_date : Date;
	reason : string;
	status :string;
    apply_to : string;
    employee? : Employee;
}
