import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdmGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate(): boolean {
    console.log('privilege: ', this.authService.getIdPrivilege());
    if (this.authService.getIdPrivilege() === 1) {
      return true;
    }
    this.router.navigate(['/product']);
    return false;
  }
}
