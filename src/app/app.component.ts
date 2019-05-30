import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  searchForm = this.fb.group({
    query: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.searchForm.value);
  }
}
