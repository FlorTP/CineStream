import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectorRef, NgZone  } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isExpanded = false;
  isFound: boolean = false;

  data: any;
  subMenuItems =[] as any;
  formBuscar!: FormGroup;

  // Arrays
  AListSearch = [] as any;

    constructor(public router: Router, private fb: FormBuilder, private cdRef: ChangeDetectorRef, private ngZone: NgZone){

      this.formBuscar = this.fb.group({
        filter: ['']
      });

    }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    axios.get('assets/json/api.json')
      .then(response => {
        // debugger
        this.data = response.data;
        this.subMenuItems = this.data.genres;
        //console.log(this.subMenuItems);
      })
      .catch(error => {
        //console.error('Error al cargar el JSON:', error);
      });
  }

  goToGenre(row: any){
    debugger
    // Redireccionar a ruta según su tipo
    const ruta = '/movies/' + row.replace(/ /g, '-');

    // Redireccionar a ruta requerida, actualiza el cuerpo sin tocar la url
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([ruta]);
    });
  }

    filterGenre(option:any){
      debugger

      this.loadData();
      this.AListSearch=[];

      if(option.length > 2){

        this.data.movies.forEach((row: any) => {
          debugger
          let concatenatedMovie: string = `${row.title} ${row.description} ${row.genre}`.toLowerCase();

          if(concatenatedMovie.includes(option.toLowerCase())){
            this.AListSearch.push(row);
          }
        });
      }

      this.isFound = (this.AListSearch.length > 0 ? true:false) ;

      // Detecta cambios
      this.ngZone.run(() => {
        this.cdRef.detectChanges();
      });
    }

}
