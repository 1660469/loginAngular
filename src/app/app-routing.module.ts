import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuardService]},
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
