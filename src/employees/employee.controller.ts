import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

import { Employee } from './schemas/employee.schema';
import { EmployeesService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get(':Id')
  async getEmployee(@Param('employeeId') employeeId: string): Promise<Employee> {
    return this.employeesService.getEmployeeById(employeeId);
  }

  @Get()
  async getEmployees(): Promise<Employee[]> {
      return this.employeesService.getEmployees();
  }

  @Post()
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
      return this.employeesService.createEmployee(createEmployeeDto.email, createEmployeeDto.age)
  }

  @Patch(':employeeId')
  async updateEmployee(@Param('employeeId') employeeId: string, @Body() updateemployeeDto: UpdateEmployeeDto): Promise<Employee> {
      return this.employeesService.updateEmployee(employeeId, updateemployeeDto);
  }
}