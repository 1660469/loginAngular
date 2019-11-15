import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'liststudent', component: ListStudentComponent,
      },
      {
        path: 'detailstudent', component: DetailStudentComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
