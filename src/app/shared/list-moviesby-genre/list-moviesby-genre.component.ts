import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-list-moviesby-genre',
  templateUrl: './list-moviesby-genre.component.html',
  styleUrls: ['./list-moviesby-genre.component.css']
})
export class ListMoviesbyGenreComponent {

  listMovies= [] as any;

  isExpanded = false;
  isGenres: boolean = false;
  isMovie: boolean = false;
  data: any;

  @Input() optionFilter!: string;
  optionFilterMovie!: string;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // debugger
    axios.get('assets/json/api.json')
      .then(response => {
        // validar si es genero o pelicula
        this.data = response.data;

        this.data.genres.forEach((row: any) => {

          if(row.toLowerCase() === this.optionFilter.toLowerCase()){
            this.isGenres = true;
            this.isMovie  = false;
          }
        });

        if(!this.isGenres){

          this.isMovie  = true;
          this.isGenres = false;

          this.optionFilterMovie = this.optionFilter.replace(/-/g, ' ');

          // filtra los datos de la película
          this.listMovies = this.data.movies.filter((movie: { title: string; }) => movie.title.toLowerCase() === this.optionFilterMovie.toLowerCase());
          console.log('pelicula:', this.listMovies);

        }else{
          this.isMovie  = false;
          this.isGenres = true;

          // filtra los datos de los generos
          this.listMovies = this.data.movies.filter((movie: { genre: string; }) => movie.genre === this.optionFilter);
          console.log('Generos:', this.listMovies);
        }

      })
      .catch(error => {
        console.error('Error al cargar el JSON:', error);
      });
  }
}
