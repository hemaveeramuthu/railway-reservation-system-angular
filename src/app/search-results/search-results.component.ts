import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  trains: { number: string, name: string }[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Fetch or populate the train data here
    this.trains = [
      { number: '12345', name: 'Express Train A' },
      { number: '67890', name: 'Local Train B' },
      { number: '24680', name: 'Superfast Train C' },
      { number: '13579', name: 'Shatabdi Express D' },
      { number: '54321', name: 'Duronto Express E' },
      { number: '98765', name: 'Rajdhani Express F' },
      { number: '45678', name: 'Passenger Train G' },
      { number: '10293', name: 'Mail Train H' }
    ];
  }

  onBook(trainNumber: string): void {
    // Navigate to the new page with the train number as a route parameter
    this.router.navigate(['/booking', trainNumber]);
  }
}
