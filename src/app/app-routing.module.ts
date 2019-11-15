import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuardService]}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
