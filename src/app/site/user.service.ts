import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userlist:User[] = [
    {username:'admin',password:'admin',role:'admin',firstname:'keer',lastname:'keer'},
    {username:'cust',password:'cust',role:'cust',firstname:'keerthana',lastname:'keer1'},
    {username:'wilson',password:'kee',role:'admin',firstname:'wilson',lastname:'dowrla'}
  ]
  Addnewuser(user:User)
  {
    this.userlist.push(user)
  }
  GetUser(username:string)
  {
    return this.userlist.find(user => user.username == username)
  }
  constructor() { }
}

