import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  currentUser: User;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.loginService.currentUser;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

}
