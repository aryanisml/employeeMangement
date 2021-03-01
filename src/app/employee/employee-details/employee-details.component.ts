import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { of, Subject } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';
import { EmployeeDetailsService } from './employee-details.service';
import { EmployeeService } from '../employee.service';
import { ActionCellRendererComponent } from './action/action-cell-renderer.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/share/dialog/dialog.component';
import { EditDialogComponent } from 'src/app/share/edit-dialog/edit-dialog.component';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  rowData: Employee[] = [];
  columnDefs: any;
  frameworkComponents: any;
  context: any;

  constructor(
    private _empService: EmployeeService,
    private _empDetailsService: EmployeeDetailsService,
    private dialog: MatDialog
  ) {
    this.createColDef();
    this.frameworkComponents = this.getFrameworkComponents();
    this.context = {
      componentParent: this,
    };
  }

  ngOnInit(): void {
    this.fetchEmployeeInformation();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  fetchEmployeeInformation() {
    this._empService
      .getEmployees()
      .pipe(takeUntil(this.destroy$))
      .subscribe((empData) => {
        console.log(empData);
        this.rowData = empData;
        this._empService.emplyeeCount.next(empData.length);
      });
  }
  createColDef() {
    this.columnDefs = this._empDetailsService.getColDef();
  }

  getFrameworkComponents() {
    return {
      actionCellRenderer: ActionCellRendererComponent,
    };
  }

  openDialog(params: any) {
    this._empDetailsService.actionsData = params.data;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Delete confirmation',
        okay: 'Yes',
        cancel: 'No',
        message: `Are you sure you want to delete ${params.data.name} ? `,
      },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((actionData) => {
        if (actionData === 'Yes') {
          this.deleteEmployee()
            .pipe(
              concatMap(() => {
                this._empDetailsService.actionsData = '';
                this.fetchEmployeeInformation();
                return of([]);
              })
            )
            .subscribe();
        }
      });
  }

  deleteEmployee() {
    return this._empService
      .deleteEmployee(this._empDetailsService.actionsData)
      .pipe(takeUntil(this.destroy$));
  }

  openEditDialog(params: any) {
    this._empDetailsService.actionsData = params.data;
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: {
        name: params.data.name,
        age: params.data.age,
        mobileNo: params.data.mobileNo,
        email: params.data.email,
        address: params.data.address,
        id: params.data.id,
        employeeId: params.data.employeeId,
      },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((actionData) => {
        if (actionData.type !== 'cancel') {
          this.updateEmployee(actionData.data)
            .pipe(
              concatMap(() => {
                this._empDetailsService.actionsData = '';
                this.fetchEmployeeInformation();
                return of([]);
              })
            )
            .subscribe();
        }
      });
  }
  updateEmployee(emp: any) {
    return this._empService.updateEmployee(emp).pipe(takeUntil(this.destroy$));
  }
}
