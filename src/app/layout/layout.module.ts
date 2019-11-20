import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { SharedModule } from '../shared/shared.module';
import { FormstudentComponent } from './formstudent/formstudent.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';



@NgModule({
  declarations: [LayoutComponent, ListStudentComponent, DetailStudentComponent, EditStudentComponent, FormstudentComponent, CreatestudentComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
