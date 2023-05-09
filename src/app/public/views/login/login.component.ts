import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }
  loginUser() {
    if (this.loginForm.invalid) { return }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    // var userLogin = this.loginForm.value.username;
    // var filterJson = this.users.filter(function (user) { return user.first_name === userLogin  });
    // if (filterJson.length > 0) {
    //   this.router.navigate(['/principal/ships'])
    // } else {
    //   this.unregistered = true;
    // }

    this.loginService.login(this.loginForm.value.username);
  }
}

