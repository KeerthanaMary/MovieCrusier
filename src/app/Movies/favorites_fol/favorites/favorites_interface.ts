import { MovieInterface } from '../../item-info/movie-info/movie-interface';

export interface FavoritesInterface
{
    MovieList:MovieInterface[];
    count:number;
}