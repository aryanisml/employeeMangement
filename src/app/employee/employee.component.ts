import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  count: any = 0;
  constructor(private _empService: EmployeeService) {
    this._empService.emplyeeCount.subscribe((d) => (this.count = d));
  }

  ngOnInit(): void {}
}
