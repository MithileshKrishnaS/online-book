import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  name:any='';
  email:any='';
  password:any='';
  cp:any='';
  nv:any='';
  ev:any='';
  pv:any='';
  users:any=[];
  constructor(private fb: FormBuilder, private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getusers().subscribe(users=> {
      this.users=users;
    })
    
    this.form=this.fb.group({
      name:['',Validators.required],
      email:[''],
      password:[''],
      cpassword:['']
    })
  }

  check()
  {
    this.name='';
    this.email='';
    this.password='';
    this.cp='';
    if(this.form.value.name=='')
    {
      this.name="enter valid name";
    }
    if(this.form.value.email=='')
    {
      this.email="enter valid email";
    }
    if(this.form.value.password=='')
    {
      this.password="enter valid password";
    }
    if(this.form.value.cpassword=='')
    {
      this.cp="enter valid password";
    }
    if(this.form.value.password!=this.form.value.cpassword)
    {
      this.cp="password does not match"
    }
    if(this.name=='' && this.email=='' && this.password=='' && this.cp=='')
    {
      var add=false;
      for(let i of this.users)
      {
        console.log(this.nv+''+i.name)
        if(this.nv==i.name)
        {
          add=true;
        }
      }
      if(!add)
      {
        var store={
          name :this.nv,
          email :this.ev,
          password :this.pv
        }
        this.users.push(store);
      }
      
      console.log(this.users);
      localStorage.setItem('data',JSON.stringify(this.users));
      this.router.navigateByUrl("/login");
    }
  }
}
