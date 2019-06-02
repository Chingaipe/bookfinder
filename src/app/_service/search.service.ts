import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  url = 'https://www.googleapis.com/books/v1/volumes?q=';
  
  constructor(
    private http: HttpClient
  ) { }

  getBooks(query: string) {
    return this.http.get(this.url + query);
  }

}