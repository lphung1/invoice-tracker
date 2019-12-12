import { Customer } from './../../Models/Customer';
import { InvoiceLine } from './../../Models/InvoiceLine';
import { Invoice } from './../../Models/Invoice';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {


  invoice: Invoice = new Invoice();
  invoiceLineArray: InvoiceLine[] = [];
  customerList: Customer [] = [
    {customerId: 1, firstName: 'Sam', lastName: 'hills', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131}, 
    {customerId: 2, firstName: 'Tom', lastName: 'smith', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131},
    {customerId: 3, firstName: 'Dan', lastName: 'pickles', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131},
    {customerId: 4, firstName: 'Peter', lastName: 'jenkins', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131},

  ]; // Enter the list for customers here and replace this array later


  newAttribute: any = {};
  constructor() { }
  
  ngOnInit() {

    this.invoiceLineArray.push(new InvoiceLine());
  }

  addFieldValue() {
    this.invoiceLineArray.push(new InvoiceLine());
    console.log("invoice lines in this invoice : " + this.invoiceLineArray[0].description + " " + this.invoiceLineArray[0].price);

  }

  deleteFieldValue(index) {
    if (index!== 0 ) {
    this.invoiceLineArray.splice(index, 1);
    }
  }
}
