import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent {

  // Champs du formulaire
  username: string = '';
  password: string = '';

  // Message d'erreur si login échoue
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Méthode appelée lors du submit du formulaire
  onLogin() {

    const success = this.authService.login(
      this.username,
      this.password
    );

    if (success) {
      // redirection si login OK
      this.router.navigate(['/']);
    } else {
      // message erreur si login KO
      this.errorMessage = 'Identifiants incorrects';
    }
  }
}