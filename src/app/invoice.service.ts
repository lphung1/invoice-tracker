import { Invoice } from './Models/Invoice';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  url = 'http://localhost:8080/invoiceTracker/api/';

  private invoice: Invoice;

  getAllInvoice(): Observable<any> {
    const api = 'invoice';
    return this.http.get(this.url + api);
  }

  constructor(private http: HttpClient) { }
}
