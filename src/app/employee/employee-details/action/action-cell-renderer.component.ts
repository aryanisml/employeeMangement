import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgRendererComponent, ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app=action-cell-renderer',
  templateUrl: './action-cell-renderer.component.html',
  styleUrls: ['./action-cell-renderer.component.scss'],
})
export class ActionCellRendererComponent implements AgRendererComponent {
  params: any;
  constructor() {}
  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    console.log(params);
    this.params = { ...params };
  }
  deleteEmployee() {
    this.params.context.componentParent.openDialog(this.params);
  }

  editEmployee(){
    this.params.context.componentParent.openEditDialog(this.params);
  }
}
