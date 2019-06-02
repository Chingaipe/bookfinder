import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchService } from './_service/search.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  books: any;

  searchForm = this.fb.group({
    query: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService) { }

  onSubmit() {
    let query = this.searchForm.value;

    this.searchService.getBooks(query).subscribe(
      data => {
        this.books = data['items'];
      },
      err => {
        console.log(err);
      }
    );

    console.log(this.searchForm.value);
  }
}
