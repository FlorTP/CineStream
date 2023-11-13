import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent {

  listMovies= [] as any;

  isExpanded = false;
  data: any;

  constructor(public router: Router){  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    axios.get('assets/json/api.json')
      .then(response => {

        this.data = response.data;
        this.listMovies = this.data.movies;
      })
      .catch(error => {
        console.error('Error al cargar el JSON:', error);
      });
  }
  goToMovie(movie:any){
  debugger
  // Redireccionar a ruta según su tipo
  const ruta = '/movies/' + movie.replace(/ /g, '-');

  // Redireccionar a ruta requerida, actualiza el cuerpo sin tocar la url
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([ruta]);
  });
}

}
