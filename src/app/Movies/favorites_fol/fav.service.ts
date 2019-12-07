import { Injectable, EventEmitter, Output } from '@angular/core';
import { MenuService } from '../item-info/menu.service';
import { MovieInterface } from '../item-info/movie-info/movie-interface';
import { FavoritesInterface } from './favorites/favorites_interface';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private menuService:MenuService){}
  fooditemlist:MovieInterface[] = this.menuService.Getmovieitems()
 cart:FavoritesInterface = {MovieList:[],count:0}
 @Output() cartUpdated=new EventEmitter()
 getcartitems()
 {
     return this.cart.MovieList;
 }
 calculatetotal()
 {
     let Count:number = 0
     for(let item of this.cart.MovieList){
         Count = Count + item.budget
     }
     this.cart.count = Count
     return this.cart.count
 }
 addtocart(itemid:number)
 {
     if(itemid>0)
     {
          console.log(itemid)
     this.cart.MovieList.push(this.menuService.getMovieItem(itemid))
     }
    else{
        console.log(itemid);
    }
     this.calculatetotal()
 }
 deletefromcart(itemdeleteId:number)
 {
     this.cart.MovieList.splice(this.cart.MovieList.findIndex(item => item.id==itemdeleteId),1)
 }
 clearCart()
{
  this.cart = {MovieList:[],count:0}
}
}
