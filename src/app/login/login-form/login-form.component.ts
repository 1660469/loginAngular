import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { StudentService } from 'src/app/student.service';
import { Router, ActivatedRoute } from '@angular/router';

//
import { ViewChild, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading/public_api';
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
  returnUrl;
  // PrimaryWhite = '#ffffff';
  // SecondaryGrey = '#ccc';
  // PrimaryRed = '#dd0031';
  // SecondaryBlue = '#006ddd';
  // @ViewChild('ngxLoading', { static: false }) ngxLoadingComponent: NgxLoadingComponent;
  // @ViewChild('customLoadingTemplate', { static: false }) customLoadingTemplate: TemplateRef<any>;
  // public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  // public loading = true;
  // public primaryColour = this.PrimaryWhite;
  // public secondaryColour = this.SecondaryGrey;
  // public coloursEnabled = false;
  // public loadingTemplate: TemplateRef<any>;
  // public config = { animationType: ngxLoadingAnimationTypes.none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
  }
  // public toggleColours(): void {
  //   this.coloursEnabled = !this.coloursEnabled;

  //   if (this.coloursEnabled) {
  //     this.primaryColour = this.PrimaryRed;
  //     this.secondaryColour = this.SecondaryBlue;
  //   } else {
  //     this.primaryColour = this.PrimaryWhite;
  //     this.secondaryColour = this.SecondaryGrey;
  //   }
  // }

  // toggleTemplate(): void {
  //   if (this.loadingTemplate) {
  //     this.loadingTemplate = null;
  //   } else {
  //     this.loadingTemplate = this.customLoadingTemplate;
  //   }
  // }

  // public showAlert(): void {
  //   alert('ngx-loading rocks!');
  // }

  public upperCasePw(control: AbstractControl) {
    if (!control.value.match(new RegExp("[A-Z]"))) {
      return {validPw: true};
    }
    return null;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    if (localStorage.getItem('this.result') && (localStorage.getItem('this.result') !== 'undefined') && JSON.parse(localStorage.getItem('this.result'))) {
      this.router.navigate(['layout/liststudent']);
    }
    this.returnUrl = this.route.snapshot.queryParams[' returnUrl'] || 'layout/liststudent';
    this.formHBC = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), this.upperCasePw]]
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
    this.validateAllFormFields(this.formHBC);
    if (!this.formHBC.valid) {
      return;
    }
    this.username = this.formHBC.value.username;
    this.password = this.formHBC.value.password;
    this.result = this.studentService.arrayStudent.find(x => {
      if (x.name === this.username && x.password === this.password) {
        return x;
      }
    }
    );
    window.localStorage['this.result'] = JSON.stringify(this.result);
    if (this.result != null) {
      this.router.navigate([this.returnUrl]);
    }
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }
  messageError(field: string) {
    if (!this.formHBC.get(field).errors) {
      return '';
    }
    if (this.formHBC.get(field).errors.required) {
      return 'Please inform this control.';
    }
    if (this.formHBC.get(field).errors.minlength) {
      return 'Please inform at least 6 characters.';
    }
    if (this.formHBC.get(field).errors.validPw) {
      return 'Please inform password contain at least 1 uppercase letter.';
    }
  }
}