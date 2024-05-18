import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent, MovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AtividadeFilmes';
}
