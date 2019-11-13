import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  formHBC: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formHBC = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  isFieldValid(field: string) {
    return !this.formHBC.get(field).valid && this.formHBC.get(field).touched;
  }
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  }
  onSubmit() {
    if (this.formHBC.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.formHBC);
    }
  }
}