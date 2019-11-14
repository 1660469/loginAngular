import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      { path: 'loginform', component: LoginFormComponent }
    ]
  },
];

@NgModule({
  declarations: [FieldErrorDisplayComponent],
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule, CommonModule],
  exports: [RouterModule, FieldErrorDisplayComponent]
})
export class LoginRoutingModule { }
