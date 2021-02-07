import { Injectable } from '@angular/core';
import { Employee } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  currentEmployee: Employee = {
    EmployeeName: '',
    Department: '',
    DateOfJoining: '',
    PhotoFileName: ''
  };

  constructor() { }

  setNameAndDate(
    currentEmpName: string,
    currentDateOfJoining: string
    ) {
    this.currentEmployee.EmployeeName = currentEmpName;
    this.currentEmployee.DateOfJoining = currentDateOfJoining;
  }

  setDepartment(
    currentDepartment: string
  ) {
    this.currentEmployee.Department = currentDepartment;
  }

}
