import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'loginform',
        pathMatch: 'full'
      },
      {
        path: 'loginform', component: LoginFormComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule, CommonModule],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
