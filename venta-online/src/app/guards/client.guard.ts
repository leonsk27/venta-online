import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getIdPrivilege() === 0) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
