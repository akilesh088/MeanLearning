import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
 
 
 
@Injectable({
  providedIn:'root'
})
 
export class AuthGuard implements CanActivate{
  constructor(private router:Router){}
 
  canActivate():boolean{
    const isAuthenticated=false;
    if(!isAuthenticated){
      this.router.navigate(['/'])
      return false
    }
    return  true;
  }
}
