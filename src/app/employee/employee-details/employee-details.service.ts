import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsService {
  actionsData: any;
  constructor() {
    
  }

  getColDef() {
    return [
      { field: 'empId', sortable: true, filter: true },
      { field: 'name', sortable: true, filter: true },
      { field: 'age', sortable: true, filter: true },
      { field: 'phone', sortable: true, filter: true },
      { field: 'address', sortable: true, filter: true },
      {
        field: '',
        cellRenderer: 'actionCellRenderer',
        headerName: 'Action',
      },
    ];
  }
}
