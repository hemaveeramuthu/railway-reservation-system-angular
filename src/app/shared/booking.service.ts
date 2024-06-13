import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookings: any[] = [];

  constructor() {}

  addBooking(booking: any): void {
    booking.seatNumber = this.generateRandomSeatNumber();
    this.bookings.push(booking);
  }

  private generateRandomSeatNumber(): number {
    return Math.floor(Math.random() * 100) + 1; // Generates a random seat number between 1 and 100
  }

  generateBill(): number {
    let totalAmount = 0;
    for (const booking of this.bookings) {
      totalAmount += this.getSeatTypeAmount(booking.seatType);
    }
    return totalAmount;
  }

  private getSeatTypeAmount(seatType: string): number {
    switch (seatType) {
      case 'First Class':
        return 1500;
      case 'AC Chair Class (CC)':
        return 1000;
      case 'Sleeper Class (SL)':
        return 800;
      case 'Second Class (2S)':
        return 500;
      case 'Unreserved/General Class':
        return 200;
      default:
        return 0;
    }
  }
}
