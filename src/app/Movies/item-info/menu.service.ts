import { Injectable } from '@angular/core';
import { MovieInterface } from './movie-info/movie-interface';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  [x: string]: any;

  movieItemList: MovieInterface[] = [
    {id:1,title:'Avengers End Game',budget:134234,Genre:"Action",active:true,hasTeaser:true,dateoflaunch:new Date("11/11/1213"),imageurl:("https://in.bookmyshow.com/entertainment/wp-content/uploads/2019/04/Avengers-Rajeev-Masand-_960x540.jpg")},
    {id:2,title:'Despicable me3',budget:213222,Genre:"ANimation",active:true,hasTeaser:false,dateoflaunch:new Date("12/11/2019"),imageurl:("http://i.dawn.com/primary/2015/09/55fac4e4f097a.gif")},
    {id:3,title:'Frozen',budget:2149087,Genre:"Animation",active:false,hasTeaser:true,dateoflaunch:new Date("11/11/2010"),imageurl:("https://www.headlinesoftoday.com/wp-content/uploads/2019/11/maxresdefault.jpg")},
    {id:4,title:'Malificient',Genre:"Thriller",budget:3423355,active:true,hasTeaser:true,dateoflaunch:new Date("11/11/2011"),imageurl:("https://talkiewood.com/wp-content/uploads/2014/05/maleficent.jpg")},
    {id:5,title:'Aqua Man',Genre:"Action",budget:133435,active:false,hasTeaser:true,dateoflaunch:new Date("11/11/2009"),imageurl:("https://in.bookmyshow.com/entertainment/wp-content/uploads/2018/10/EYNTK-about-Aquaman_960x540.jpg")}
];
Getmovieitems():MovieInterface[]{
    return this.movieItemList
}
foodFilter = new Subject();

  getmovieFilter():Subject<Object>{
    return this.foodFilter
  }


getMovieItem(itemId:number):MovieInterface{
    return this.movieItemList[this.movieItemList.findIndex(item => item.id == itemId)]
}
getFilteredMovieItems(title: string, MovieItems: MovieInterface[]): MovieInterface[]{
  if(title!=''){
    const result = MovieItems.filter(item => item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
    return result ? result : []
  }
}

updateMovieItems(fooditem:MovieInterface)
{
   let itemindex:number=this.movieItemList.findIndex(item => item.id=fooditem.id)
   this.movieItemList[itemindex]=fooditem;
   console.log(this.movieItemList[itemindex])
  }

}
    

