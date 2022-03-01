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
  form: FormGroup;
  string:any='';
  log=false;

  constructor( private fb: FormBuilder,private router: Router,private service:ServiceService ) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:['',Validators.required],
      password:['']
    })

    this.users=JSON.parse(localStorage.getItem('data')|| '{}');
    if(Object.keys(this.users).length === 0)
    {
      this.service.getusers().subscribe(users=> {
        this.users=users;
        console.log(this.users)
      })
    }
  }

  signup()
  {
    this.router.navigateByUrl("/signup");
  }

  login()
  {
    this.log=true;
  }

  check()
  {
    console.log(this.form.value)
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
