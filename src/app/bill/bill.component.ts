// src/app/bill/bill.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';
import { BillService } from '../shared/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bookings: any[] = [];
  totalAmount: number = 0;
  buttonWidth = 240;

  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00', // Update this dynamically based on totalAmount
      currencyCode: 'USD',
      countryCode: 'US'
    }
  };

  constructor(
    private bookingService: BookingService,
    private billService: BillService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookings = this.bookingService.bookings;
    this.calculateTotalAmount();
    this.paymentRequest.transactionInfo.totalPrice = this.totalAmount.toFixed(2); // Set total price dynamically
  }

  calculateTotalAmount() {
    this.totalAmount = this.bookings.reduce((acc, booking) => {
      return acc + this.getSeatTypeAmount(booking.seatType);
    }, 0);
  }

  getSeatTypeAmount(seatType: string): number {
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

  onSaveBill() {
    const bill = {
      name: 'Total Bill',
      amount: this.totalAmount
    };

    this.billService.addBill(bill).subscribe(
      response => {
        console.log('Bill added:', response);
        alert('Bill saved successfully!');
      },
      error => {
        console.error('Error adding bill:', error);
        alert('Failed to save the bill.');
      }
    );
  }

  onBack() {
    this.router.navigate(['/add']);
  }

  onLoadPaymentData(event: any) {
    console.log(event, '>>Data');
    // Handle the payment data response
  }
}
