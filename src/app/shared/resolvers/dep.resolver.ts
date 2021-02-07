import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepResolver implements Resolve<any> {

  constructor(
    private http: HttpClient
  ){ }

  resolve(): Observable<any>{
    return this.http.get<any>('http://localhost:5000/api/department');
  }
}
