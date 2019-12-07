import { Component, OnInit } from '@angular/core';
import { FavService } from 'src/app/Movies/favorites_fol/fav.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(private authService:AuthService, private cartService:FavService) { }

  ngOnInit() {
  }
  getUser(){
    console.log(this.authService.loggedInUser)
    return this.authService.loggedInUser
  }

  isAdmin()
  {
    console.log(this.authService.isAdmin)
    return this.authService.isAdmin
  }

  onLogout()
  {
    this.cartService.clearCart()
    this.authService.logout();
  }

}
