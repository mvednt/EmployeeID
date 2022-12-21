import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Employee, EmployeeDocument } from "./schemas/employee.schema";

@Injectable()
export class EmployeesRepository {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

    async findOne(employeeFilterQuery: FilterQuery<Employee>): Promise<Employee> {
        return this.employeeModel.findOne(employeeFilterQuery);
    }

    async find(employeesFilterQuery: FilterQuery<Employee>): Promise<Employee[]> {
        return this.employeeModel.find(employeesFilterQuery)
    }

    async create(employee: Employee): Promise<Employee> {
        const newEmployee = new this.employeeModel(employee);
        return newEmployee.save()
    }

    async findOneAndUpdate(employeeFilterQuery: FilterQuery<Employee>, employee: Partial<Employee>): Promise<Employee> {
        return this.employeeModel.findOneAndUpdate(employeeFilterQuery, employee, { new: true });
    }
}