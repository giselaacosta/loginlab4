import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  title = '"Pagina de Registro  "';

  emailAddress: string;
  password: string;

  constructor(public authService: AuthService) { }

  signup() {
    this.authService.signup(this.emailAddress, this.password);
    this.emailAddress = this.password = '';
  }



    logout() {
    console.log('User is successfully logged out.')
     this.authService.logout();
   }
}
