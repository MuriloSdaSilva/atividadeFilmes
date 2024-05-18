import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  private movieService = inject(MovieService);
  movies:any=[];

  ngOnInit(): void {

  }
  loadMovies(){
    console.log("aaaaaaaa")
    this.movieService.getMovies().subscribe({
      next: (res:any)=>{
        this.movies = res.results;
        console.log(res.results);

      },
      error:(error)=>console.log('Erro ao realizar o fetch dos filmes', error)
    });
  }
}
