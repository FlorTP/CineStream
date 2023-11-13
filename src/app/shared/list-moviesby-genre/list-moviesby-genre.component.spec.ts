import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesbyGenreComponent } from './list-moviesby-genre.component';

describe('ListMoviesbyGenreComponent', () => {
  let component: ListMoviesbyGenreComponent;
  let fixture: ComponentFixture<ListMoviesbyGenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMoviesbyGenreComponent]
    });
    fixture = TestBed.createComponent(ListMoviesbyGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
