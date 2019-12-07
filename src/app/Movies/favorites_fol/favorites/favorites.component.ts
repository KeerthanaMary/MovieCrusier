import { Component, OnInit } from '@angular/core';
import { MovieInterface } from '../../item-info/movie-info/movie-interface';
import { FavService } from '../fav.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private cartservice:FavService) { }
cartitems:MovieInterface[]
total:number;
  ngOnInit() {

    this.cartitems=this.cartservice.getcartitems();
    this.total=this.cartservice.calculatetotal();
  }
onRemoveItem(itemid:number)
{
  this.cartservice.deletefromcart(itemid);
  this.total=this.cartservice.calculatetotal();
}
}

