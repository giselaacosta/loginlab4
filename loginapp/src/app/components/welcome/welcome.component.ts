import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  title = '"Pagina Principal "';

  emailAddress: string;
  password: string;

  constructor(public authService: AuthService) { }


    logout() {
    console.log('User is successfully logged out.')
     this.authService.logout();
   }

}
