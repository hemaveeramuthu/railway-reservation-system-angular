import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service'; // Adjust the import path as per your directory structure

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  fullName: string = '';
  phoneNumber: string = '';
  gender: string = '';
  seatType: string = '';
  age: number | null = null;

  constructor(private router: Router, private bookingService: BookingService) {}

  onSubmit() {
    const booking = {
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
      gender: this.gender,
      seatType: this.seatType,
      age: this.age
    };

    this.bookingService.addBooking(booking);
    this.router.navigate(['/add']); // Navigate to the desired route after successful booking
  }
}
