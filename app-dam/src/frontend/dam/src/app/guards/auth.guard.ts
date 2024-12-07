import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const _loginService = inject(LoginService)
  const _router = inject(Router)

  // si no tiene token, permancer en login,sino devuelve true
  if (!_loginService.logIn) {
    _router.navigate(['/login'])
    return false
  }
  return true;
};
