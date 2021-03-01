import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HeaderComponent, DialogComponent, EditDialogComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents :[HeaderComponent, DialogComponent, EditDialogComponent]
})
export class SharedModule { }
