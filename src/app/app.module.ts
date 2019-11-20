import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InputUnitDirective } from './shared/directive/input-unit.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [FormsModule]
})
export class AppModule { }
