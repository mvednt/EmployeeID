import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateEmployeeDto } from "./dto/update-employee.dto";

import { Employee } from "./schemas/employee.schema";
import { EmployeesRepository } from "./employee.repository";

@Injectable()
export class EmployeesService {
    constructor(private readonly employeesRepository: EmployeesRepository) {}

    async getEmployeeById(employeeId: string): Promise<Employee> {
        return this.employeesRepository.findOne({ employeeId })
    }

    async getEmployees(): Promise<Employee[]> {
        return this.employeesRepository.find({});
    }

    async createEmployee(email: string, age: number): Promise<Employee> {
        return this.employeesRepository.create({
            employeeId: uuidv4(),
            email,
            age,
            favoriteFoods: []
        })
    }

    async updateEmployee(employeeId: string, employeeUpdates: UpdateEmployeeDto): Promise<Employee> {
        return this.employeesRepository.findOneAndUpdate({ employeeId }, employeeUpdates);
    }
}