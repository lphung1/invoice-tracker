import { InvoiceLine } from '../Models/InvoiceLine';
import { Invoice } from '../Models/Invoice';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {

  private thisInvoice: Invoice;
  private thisInvoiceDetail: InvoiceLine;


  saveInvoice(i: Invoice) {
    this.thisInvoice = i;
  }

  getInvoice() {
    return this.thisInvoice;
  }

  constructor() { }
}
