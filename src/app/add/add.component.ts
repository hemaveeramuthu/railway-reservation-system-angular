// add.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.bookings = this.bookingService.bookings;
  }

  onRemove(index: number): void {
    this.bookings.splice(index, 1);
  }

  onAddNew(): void {
    this.router.navigate(['/booking']);
  }

  onGenerateBill(): void {
    const totalAmount = this.bookingService.generateBill();
    this.router.navigate(['/bill'], { queryParams: { totalAmount } });
  }
}
