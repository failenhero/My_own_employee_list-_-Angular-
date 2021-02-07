import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/shared/interfaces';
import { DbService } from 'src/app/shared/services/db.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {

  displayedColumns: string[] = [
    'id', 'name', 'department', 'date-of-joining', 'buttons'
  ];

  employeeList: Employee[] = [];
  employeeNameFilter: string = '';

  constructor(
    private dbService: DbService,
    public dialog: MatDialog,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.dbService.getEmpList().subscribe(res => {
      this.employeeList = res
    })
  }

  deleteEmployee(id: number|undefined){
    this.dbService.deleteEmployee(id).subscribe();
    this.refreshEmpList();
    location.reload();
  }

  openDialog(emp: Employee) {
    this.employeeService.currentEmployee = emp;
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
