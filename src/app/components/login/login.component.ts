import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.authenticate(this.userName, this.password).subscribe(
      response => {
        // Manejar la respuesta exitosa aquí
        console.log('Autenticación exitosa', response);
        // Guardar el token de autenticación en el almacenamiento local
        localStorage.setItem('auth', JSON.stringify(response));
        this.errorMessage = '';
      },
      error => {
        // Manejar el error aquí
        console.error('Error de autenticación', error);
        this.errorMessage = 'Credenciales inválidas';
      }
    );
  }
}
