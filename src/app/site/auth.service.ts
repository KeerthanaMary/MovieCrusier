import { Injectable } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser:User=null;
  isAdmin:boolean=false;
    constructor(private router:Router,private userservice:UserService) { }
    authenticate(username:string,password:string)
    {
      this.loggedInUser=this.userservice.GetUser(username)
      if(this.loggedInUser!= null && this.loggedInUser.username==username&& this.loggedInUser.password==password )
      {
        if(this.loggedInUser.role == 'admin')
        {
          this.isAdmin=true;
  
        }
        else
        {
          this.isAdmin=false;
        }
        return this.loggedInUser
      }
      else
      {
        return null
      }
    }
  
    logout()
    {
      this.loggedInUser=null;
      this.isAdmin=false;
      this.router.navigateByUrl('/login')
    }
  }