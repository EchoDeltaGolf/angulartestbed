import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-example',
  templateUrl: './login-example.component.html',
  styleUrls: ['./login-example.component.css']
})
export class LoginExampleComponent implements OnInit {
  customForm = this.fb.group({
     email: ['', {
        validators: [
           Validators.required
          ,Validators.email
        ]
       ,updateOn: 'blur'
     }]
    ,password: ['', [
       Validators.required
      ,Validators.minLength(8)
      ,createPasswordStrengthValidator()]
    ]
    ,dateEntry: ['',
      checkDateIsPast()
    ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get email() {
    return this.customForm.controls['email'];
  }

  get password() {
    return this.customForm.controls['password'];
  }

  get dateEntry() {
    return this.customForm.controls['dateEntry'];
  }
}

export function checkDateIsPast(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const val = control.value;

    if(!val) {
      return null;
    }

    const dateVal = new Date(val);
    const currentDate = new Date();

    return (dateVal < currentDate) ? {isDatePast:true} : null;
  }
}

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {
          return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? {passwordStrength: {
        hasUpperCase: true,
        hasLowerCase: true,
        hasNumeric: false
      }}: null;
  }
}
