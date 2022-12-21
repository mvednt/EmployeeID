"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const employee_repository_1 = require("./employee.repository");
let EmployeesService = class EmployeesService {
    constructor(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    async getEmployeeById(employeeId) {
        return this.employeesRepository.findOne({ employeeId });
    }
    async getEmployees() {
        return this.employeesRepository.find({});
    }
    async createEmployee(email, age) {
        return this.employeesRepository.create({
            employeeId: (0, uuid_1.v4)(),
            email,
            age,
            favoriteFoods: []
        });
    }
    async updateEmployee(employeeId, employeeUpdates) {
        return this.employeesRepository.findOneAndUpdate({ employeeId }, employeeUpdates);
    }
};
EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [employee_repository_1.EmployeesRepository])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employee.service.js.map