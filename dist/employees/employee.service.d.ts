import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Employee } from "./schemas/employee.schema";
import { EmployeesRepository } from "./employee.repository";
export declare class EmployeesService {
    private readonly employeesRepository;
    constructor(employeesRepository: EmployeesRepository);
    getEmployeeById(employeeId: string): Promise<Employee>;
    getEmployees(): Promise<Employee[]>;
    createEmployee(email: string, age: number): Promise<Employee>;
    updateEmployee(employeeId: string, employeeUpdates: UpdateEmployeeDto): Promise<Employee>;
}
