import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { ListMoviesbyGenreComponent } from './list-moviesby-genre/list-moviesby-genre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    PreloaderComponent,
    ListMoviesComponent,
    ListMoviesbyGenreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ HeaderComponent, PreloaderComponent, ListMoviesComponent,ListMoviesbyGenreComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
