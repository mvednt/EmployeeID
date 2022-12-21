import { FilterQuery, Model } from "mongoose";
import { Employee, EmployeeDocument } from "./schemas/employee.schema";
export declare class EmployeesRepository {
    private employeeModel;
    constructor(employeeModel: Model<EmployeeDocument>);
    findOne(employeeFilterQuery: FilterQuery<Employee>): Promise<Employee>;
    find(employeesFilterQuery: FilterQuery<Employee>): Promise<Employee[]>;
    create(employee: Employee): Promise<Employee>;
    findOneAndUpdate(employeeFilterQuery: FilterQuery<Employee>, employee: Partial<Employee>): Promise<Employee>;
}
