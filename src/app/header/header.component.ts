import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLogin=JSON.parse(localStorage.getItem('isLogin')|| '{}');
    console.log(this.isLogin);
  }

  signup()
  {
    this.router.navigateByUrl("/signup");
  }

  login()
  {
    this.router.navigateByUrl("/login");
  }

  logout() {
    localStorage.setItem('isLogin','false')
  }

}
