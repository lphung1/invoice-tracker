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
  customerList: Customer [] ; // Enter the list for customers here and replace this array later


  newAttribute: any = {};
  constructor() { }
  
  ngOnInit() {

    this.invoiceLineArray.push(new InvoiceLine());
  }

  addFieldValue() {
    this.invoiceLineArray.push(new InvoiceLine());
    console.log("invoice lines in this invoice : " + this.invoiceLineArray[0].invoiceLineitemDescription + " " + this.invoiceLineArray[0].cost);

  }

  deleteFieldValue(index) {
    if (index!== 0 ) {
    this.invoiceLineArray.splice(index, 1);
    }
  }




}
