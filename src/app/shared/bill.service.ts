// src/app/shared/bill.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private apiUrl = 'http://localhost:5001/bills';

  constructor(private http: HttpClient) { }

  addBill(bill: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, bill);
  }
}
