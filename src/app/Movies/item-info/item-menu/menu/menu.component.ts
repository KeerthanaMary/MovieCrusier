import { Component, OnInit } from '@angular/core';
import { MovieInterface } from '../../movie-info/movie-interface';
import { MenuService } from '../../menu.service';
import { FavService } from 'src/app/Movies/favorites_fol/fav.service';
import { AuthService } from 'src/app/site/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foodItemList:MovieInterface[]
  filteredMovieList:MovieInterface[]
  
  constructor(private foodService: MenuService, private cartService:FavService, private authService:AuthService, private router:Router) { }
  
  ngOnInit() {
    this.foodItemList = this.foodService.Getmovieitems()
    this.filteredMovieList = this.foodItemList
    this.foodService.getmovieFilter().subscribe(
      (name:string) => {
        if(name!='')
          this.filteredMovieList = this.foodService.getFilteredMovieItems(name,this.foodItemList) 
        else if(name=='')
          this.filteredMovieList = this.foodItemList
      }
    )
  }

  addToCart(itemId:number){
    if(!this.authService.loggedInUser)
    {
      this.router.navigateByUrl('/cart')
    }
    this.cartService.addtocart(itemId)
  }
}



