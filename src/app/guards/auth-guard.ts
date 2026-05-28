import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const AuthGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);
  // Vérifier la connexion
  if (authService.isLoggedIn()) {
    return true;    // accés autorisé
  } else {
    // redirection vers login
    router.navigate(['/login']);
    return false;
  }
}