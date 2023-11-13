import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoading: boolean = true;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    // Genera un delay para que figure el preloader
    setTimeout(() => {
      this.isLoading = false;
    }, 700);

  }

}
