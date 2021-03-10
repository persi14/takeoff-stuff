import { Component, OnInit } from '@angular/core';
import {DTOLoginRequest} from '../../models/DTOLoginRequest/dtologin-request';
import {AuthService} from '../../services/auth/auth.service';
import {DTOLoginResponse} from '../../models/DTOLoginResponse/dtologin-response';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {DTOUser} from '../../models/DTOUser/dtouser';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginRequest: DTOLoginRequest = new DTOLoginRequest();

  constructor(private authService: AuthService, private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {

  }

  submitForm(): void {
    this.authService.login(this.loginRequest).subscribe((res: DTOLoginResponse) => {
      localStorage.setItem('accessToken', res.accessToken);
      this.userService.getUserByEmail(this.loginRequest.email).subscribe((users: DTOUser[]) => {
        if (users.length > 0){
          localStorage.setItem('userId', String(users[0].id));
          this.router.navigate(['/']);
        }else{
          alert('Произошла ошикба');
        }
      });
    });
  }
}
