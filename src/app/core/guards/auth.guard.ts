import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';


export function authenticationGuard(): CanMatchFn {

  return () => {
    const oauthService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    
    if (!oauthService.checkAuthetication()) {
      router.navigate(['']);
      return false;
    }
    return true;
  }

}