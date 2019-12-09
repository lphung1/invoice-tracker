import { InvoiceDetailService } from './../invoice-detail.service';
import { Invoice } from './../Models/Invoice';
import { Component, OnInit, Input } from '@angular/core';
import { InvoiceLine } from '../Models/InvoiceLine';

@Component({
  selector: 'app-invoicedetail',
  templateUrl: './invoicedetail.component.html',
  styleUrls: ['./invoicedetail.component.css']
})
export class InvoicedetailComponent implements OnInit {

 @Input() invoice: Invoice;
 
  constructor(private service: InvoiceDetailService) { }

  invoicelines: InvoiceLine[] = [
    { invoiceId: 1, invoiceLineId: 1, description: 'plumbing' , price: 2500,quantity : 1},
    { invoiceId: 1, invoiceLineId: 2, description: 'electrical', price: 500,quantity : 1},
    { invoiceId: 1, invoiceLineId: 3, description: 'regrigeration',price: 52500,quantity :1},
    

  ]


  inv = this.service.getInvoice();



  ngOnInit() {
  }

}
