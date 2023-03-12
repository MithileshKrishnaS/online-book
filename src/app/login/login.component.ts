import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ServiceService  } from "../service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any={};
  login:any;
  form: FormGroup;
  string:any='';
  log=false;

  constructor( private fb: FormBuilder,private router: Router,private service:ServiceService ) { }

  ngOnInit() {
    this.users=JSON.parse(localStorage.getItem('data')|| '{}');
    this.login=JSON.parse(localStorage.getItem('isLogin')|| '{}');
    if(this.login === 'true') {
      this.router.navigateByUrl('/home');
    }
    this.form=this.fb.group({
      name:['',Validators.required],
      password:['']
    })
    if(Object.keys(this.users).length === 0)
    {
      this.service.getusers().subscribe(users=> {
        this.users=users;
      })
    }
  }


  check() {
    if(Object.keys(this.users).length === 0) {
      this.string="enter a valid name or password"
    } else {
      for(let i of this.users)
      {
        if(this.form.value.name==i.name && this.form.value.password==i.password)
        {
          this.service.auth(true);
          this.router.navigateByUrl("/home");
        }
      }
      this.string="enter a valid name or password"
    }
  }
}
