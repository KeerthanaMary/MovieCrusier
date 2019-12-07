import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieInfoComponent } from './Movies/item-info/movie-info/movie-info.component';
import { MovieEditComponent } from './Movies/movie-edit/movie-edit.component';
import { SearchMovieComponent } from './Movies/search-movie/search-movie.component';

import { FooterComponent } from './site/footer/footer.component';
import { HeaderComponent } from './site/header/header.component';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { MenuComponent } from './Movies/item-info/item-menu/menu/menu.component';
import { FavoritesComponent } from './Movies/favorites_fol/favorites/favorites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MovieInfoComponent,
    MovieEditComponent,
    SearchMovieComponent,
   
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    FavoritesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'menu',component:MenuComponent},
      {path:'cart',component:FavoritesComponent},
     {path:'edit/:id',component:MovieEditComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent}
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
