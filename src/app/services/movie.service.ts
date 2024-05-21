import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const api_URL = environment.apiURL;
const api_key = environment.apikey;

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private http = inject(HttpClient);

  constructor() { }

  getMovies(){
    return this.http.get(`${api_URL}?api_key=${api_key}`);
  }
}
