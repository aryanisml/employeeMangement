import { Injectable } from '@angular/core';
import { Employee } from '../../app/employee/entity/employee';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiURL: string = 'http://localhost:3000';
  emplyeeCount: BehaviorSubject<number>;
  constructor(private httpClient: HttpClient) {
    this.emplyeeCount = new BehaviorSubject<number>(0);
      
  }
  // Adds an employee to JSON DB
  addEmployee(employee: Employee) {
    this.httpClient.post(`${this.apiURL}/employees`, employee).subscribe(
      (data) => {
        console.log('POST Request is successful ', data);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiURL}/employees`);
  }

  deleteEmployee(employee: Employee): Observable<any> {
    // alert(employee.id);
    return this.httpClient.delete<void>(
      `${this.apiURL}/employees/${employee.id}`
    );
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.httpClient.put<void>(`${this.apiURL}/employees/${employee.id}`, employee);
  }
}
