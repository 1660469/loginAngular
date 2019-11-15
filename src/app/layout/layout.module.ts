import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { DetailStudentComponent } from './detail-student/detail-student.component';



@NgModule({
  declarations: [LayoutComponent, ListStudentComponent, DetailStudentComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
