import { Component, OnInit } from '@angular/core';
import { MovieInterface } from '../item-info/movie-info/movie-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../item-info/menu.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  MovieItem:MovieInterface;

  itemId: number
  dateOfLaunch: Date
  itemEditForm

constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute, private foodService:MenuService, private router:Router,public datepipe: DatePipe) { }

ngOnInit() {
  this.itemId = this.activatedRoute.snapshot.params['id'] as number
  this.MovieItem = this.foodService.getMovieItem(this.itemId)
  console.log(this.MovieItem)
  this.itemEditForm = this.formBuilder.group({
    name:[this.MovieItem.title,[Validators.required, Validators.maxLength(200)]],
    price:[this.MovieItem.budget,Validators.required],
    dateoflaunch:[this.datepipe.transform(this.MovieItem.dateoflaunch,'yyyy-MM-dd'),Validators.required],
    category:[this.MovieItem.Genre,Validators.required],
    active:[this.MovieItem.active],
    freeDelivery:[this.MovieItem.hasTeaser],
  })
  console.log(this.itemEditForm)
}


updatefooditem(){
  this.MovieItem.title = this.itemEditForm.value['name']
  this.MovieItem.budget = this.itemEditForm.value['price']
  this.MovieItem.dateoflaunch = this.itemEditForm.value['dateoflaunch']
  this.MovieItem.Genre = this.itemEditForm.value['category']
  this.MovieItem.active = this.itemEditForm.value['active']
  this.MovieItem.hasTeaser = this.itemEditForm.value['freeDelivery']
  console.log(this.MovieItem)
  this.foodService.updateMovieItems(this.MovieItem)
  if(confirm('Item Details saved successfully. Click OK to return to Menu List'))
  {
    this.router.navigateByUrl('/menu')
  }
}


get active(){
  return this.itemEditForm.get('active')
}

getItemName()
{
  return this.MovieItem.title
}

}

