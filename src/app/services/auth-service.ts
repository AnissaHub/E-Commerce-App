import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
 /*
   Méthode de connexion
   Elle reçoit le username et le password
   et retourne true ou false
  */
  login(username: string, password: string): boolean {

   //test
    if (username === 'admin' && password === '1234') {

      /*
       Si les identifiants sont corrects,
       on met l'utilisateur comme connecté
      */
      this.isAuthenticated = true;

      /*
       On retourne true pour dire :
       connexion réussie
      */
      return true;
    }

    /*
     Sinon, les identifiants sont faux
     on retourne false
    */
    return false;
  }

  /*
   Méthode de déconnexion
   remet l'utilisateur à l'état non connecté
  */
  logout(): void {
    this.isAuthenticated = false;
  }

  /*
   Méthode qui permet de vérifier
   si l'utilisateur est connecté ou non
  */
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}