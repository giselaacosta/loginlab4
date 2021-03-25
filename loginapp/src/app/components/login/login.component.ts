import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = '"Pagina de Login"';

  emailAddress: string;
  password: string;

  constructor(public authService: AuthService) { }

 

  login() {
    this.authService.login(this.emailAddress, this.password);
    this.emailAddress = this.password = '';    
  }

    logout() {
    console.log('User is successfully logged out.')
     this.authService.logout();
   }
}
