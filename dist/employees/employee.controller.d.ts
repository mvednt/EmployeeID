import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './schemas/employee.schema';
import { EmployeesService } from './employee.service';
export declare class EmployeeController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    getEmployee(employeeId: string): Promise<Employee>;
    getEmployees(): Promise<Employee[]>;
    createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    updateEmployee(employeeId: string, updateemployeeDto: UpdateEmployeeDto): Promise<Employee>;
}
