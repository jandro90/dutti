import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  currentUser: User;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.currentUser = this.loginService.currentUser;
  }

}
