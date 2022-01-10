import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:ServiceService,private router: Router) {}
  canActivate():any{
    if(this.service.login())
    {
      return true;
    }
    else
    {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  
}
