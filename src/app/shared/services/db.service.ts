import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department, Employee } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  readonly empURL = 'http://localhost:5000/api/employee';
  readonly depURL = 'http://localhost:5000/api/department';

  constructor(
    private http: HttpClient,
  ) { }

  getEmpList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empURL);
  }

  createNewEmployee(employee: Employee) {
    return this.http.post(this.empURL, employee);
  }

  getDepList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.depURL);
  }

  deleteEmployee(id: number|undefined){
    return this.http.delete(`${this.empURL}/${id}`);
  }

  editEmployee(employee: Employee){
    return this.http.put(this.empURL, employee);
  }
}
