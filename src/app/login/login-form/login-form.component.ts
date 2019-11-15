import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  formHBC: FormGroup;
  username;
  password;
  result;
  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit() {
    this.formHBC = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    console.log('ok');
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
    } else{
      this.validateAllFormFields(this.formHBC);
    }
    this.username = this.formHBC.value.username;
    this.password = this.formHBC.value.password;
    this.result = this.studentService.arrayStudent.find(x => {
      if(x.name === this.username && x.password === this.password){
        console.log('Login success!');
        alert('Ban da dang nhap thanh cong!')
      }
    }
    );
    console.log(' this.result ',  this.result );
  }
  messageError(field: string) {
    if (!this.formHBC.get(field).errors) {
      return '';
    }
    if (this.formHBC.get(field).errors.required) {
      return 'Please inform this control.';
    }
    if (this.formHBC.get(field).errors.minlength) {
      console.log('check', this.isFieldValid('password'));
      return 'Please inform at least 6 characters.';
    }
  }
}