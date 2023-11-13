import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  tittle:any;

  valGenre:any;

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    // debugger
    // movies
    // Valida si el valor recibo es una pelicula o un género.
    this.valGenre = this.activatedRoute.snapshot.params['id'];

  }

}
