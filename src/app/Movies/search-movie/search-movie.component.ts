import { Component, OnInit } from '@angular/core';
import { MenuService } from '../item-info/menu.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private foodService: MenuService) { }

  ngOnInit() {
  }
  onSearch(event:any){
    // console.log(event.target.value);
    this.foodService.getmovieFilter().next( event.target.value );
  }

}
