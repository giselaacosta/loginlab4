import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent  {
  title = '"Error "';


  emailAddress: string;
  password: string;

  constructor(public authService: AuthService) { }

  salir() {
    console.log('Error en logueo o registro.')
     this.authService.salir();
   }

}
