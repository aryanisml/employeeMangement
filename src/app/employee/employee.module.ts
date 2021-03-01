import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../share/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { ActionCellRendererComponent } from './employee-details/action/action-cell-renderer.component';
import { CommonMaterialModule } from '../common-material.module';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeCreationComponent,
    ActionCellRendererComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    AgGridModule.withComponents([ActionCellRendererComponent]),
    ReactiveFormsModule,
    CommonMaterialModule
 
  ],
})
export class EmployeeModule {}
