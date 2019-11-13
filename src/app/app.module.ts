import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from './login/login-form/field-error-display/field-error-display.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    FieldErrorDisplayComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LoginRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FieldErrorDisplayComponent]
})
export class AppModule { }
