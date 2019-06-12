import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  url = 'https://www.googleapis.com/books/v1/volumes?q=';
  books: any;
  hint = false;

  defaultImage = './assets/no-cover.jpg';

  searchForm = this.fb.group({
    query: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { }

  onSubmit() {
    if(this.searchForm.invalid){
      return this.hint = true;
    }

    let q = this.searchForm.value;

    this.getBooks(q.query).subscribe(
      data => {
        this.books = data['items'];
      },
      err => {
        console.log(err);
      }
    );
  }

  getBooks(query: string) {
    return this.http.get(this.url + query);
  }
}
