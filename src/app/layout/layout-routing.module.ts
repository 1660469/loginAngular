import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'liststudent', component: ListStudentComponent,
      },
      {
        path: 'detailstudent/:id', component: DetailStudentComponent,
      },
      {
        path: 'editstudent/:id', component: EditStudentComponent,
      },
      {
        path: 'createstudent', component: CreatestudentComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
