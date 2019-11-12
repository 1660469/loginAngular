import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';

const routes: Routes = [
  { path: '', component: LoginComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    LoginRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
