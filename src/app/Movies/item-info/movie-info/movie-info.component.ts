import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MovieInterface } from './movie-interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/site/auth.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  Isadmin:boolean=true
   constructor(private router:Router,private authService:AuthService) {

    }

  ngOnInit() {
  }
@Input('movie_item') movieitem:MovieInterface;
@Output() addToCartRequest: EventEmitter<number>=new  EventEmitter<number>()
onAddToCart(itemId:number){
  this.addToCartRequest.emit(itemId)
}
onEdit(itemId:number)
{
  this.router.navigateByUrl('/edit/'+itemId)
}

isAdminUser()
{
   return this.authService.isAdmin
}


}
