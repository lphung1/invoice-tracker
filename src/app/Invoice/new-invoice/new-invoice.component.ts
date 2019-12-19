import { UserService } from './../../service/user.service';
import { InvoiceService } from './../../service/invoice.service';
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
  selectedCustomer: Customer;

  newAttribute: any = {};
  constructor(private invoService: InvoiceService, private userServ: UserService) { }
  
  ngOnInit() {

    this.invoiceLineArray.push(new InvoiceLine());
    this.invoice.createDate = new Date();
    console.log("This user id = " + this.userServ.getUser().userId);
    this.invoice.user = this.userServ.getUser();


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

  submitInvoice() {
    this.invoice.invoiceLine = this.invoiceLineArray;
    //this.invoice.customer = document.getElementById('customerSelected');
    console.log("this Invoice" + this.invoice);
    this.invoService.SaveNewInvoice(this.invoice).subscribe(invo => {
      console.log(invo);

    });


  }




}
