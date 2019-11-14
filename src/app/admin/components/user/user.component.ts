import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userFormGroup: FormGroup;
  errorMessage: string;
  infoMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.buildUserFormGroup();
  }

  ngOnInit() {
  }

  buildUserFormGroup() {
    this.userFormGroup = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password01: ['', Validators.required],
        password02: ['', Validators.required]
      }
    );
  }

  createUser() {
    this.authService.createUser(
      this.userFormGroup.get('email').value,
      this.userFormGroup.get('password01').value
    ).then(
      () => {
        this.userFormGroup.patchValue(
          {
            email: '',
            password01: '',
            password02: ''
          }
        );
        this.errorMessage = null;
        this.infoMessage = 'Registro exitoso';
      }
    ).catch((error) => {
      this.infoMessage = null;
      this.errorMessage = 'Ocurrio un error al momento de crear usuario';
      console.error(error);
    });
  }

}
