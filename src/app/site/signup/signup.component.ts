import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userservice:UserService,private router1:Router) { }
userCreationForm =this.formBuilder.group({
username:[''],
firstname:[''],
lastname:[''],
password:[''],
role:['customer']
})
onSubmit()
{
this.userservice.Addnewuser(this.userCreationForm.getRawValue())
console.log(this.userCreationForm.getRawValue);
console.log(this.userservice.userlist);
this.router1.navigateByUrl('/login');
}
  ngOnInit() {
  }

}

