import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  origin: string = '';
  destination: string = '';
  date: Date = new Date(); 
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSearch() {
    if (this.origin && this.destination && this.date) {
      // Perform search logic here
      // For example, navigate to search results page
      this.router.navigate(['/search-results'], { queryParams: { origin: this.origin, destination: this.destination, date: this.date } });
    } else if (!this.date) {
      this.errorMessage = 'Please select a date.';
    } else {
      this.errorMessage = 'Please fill all fields.';
    }
  }
}
