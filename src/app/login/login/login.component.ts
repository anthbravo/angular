import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  errorMessage: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.buildLoginFormGroup();
  }

  ngOnInit() {
  }

  private buildLoginFormGroup() {
    this.loginFormGroup = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      }
    );
  }

  login() {
    this.authService.login(this.loginFormGroup.get('email').value,
      this.loginFormGroup.get('password').value)
      .then(() => {
        this.router.navigateByUrl('/admin');
      })
      .catch(
        (error) => {
          this.errorMessage = 'Usuario o contraseña incorrecta';
          console.error(error);
        }
      );
  }

}
