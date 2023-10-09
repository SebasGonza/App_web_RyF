import { CanMatchFn } from '@angular/router';


export function authenticationGuard(): CanMatchFn {

  return () => {

    

    return true;
  }

}