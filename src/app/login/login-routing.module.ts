import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, children: [
      { path: 'loginform', component: LoginFormComponent }
    ]
  },
];

@NgModule({
  declarations: [LoginFormComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
