import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:ServiceService,private router: Router) {}
  canActivate():any{
    if(localStorage.getItem('isLogin'))
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
