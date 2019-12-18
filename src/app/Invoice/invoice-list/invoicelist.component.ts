import { InvoiceService } from './../../service/invoice.service';
import { InvoiceLine } from './../../Models/InvoiceLine';
import { InvoiceDetailService } from '../../service/invoice-detail.service';
import { InvoicedetailComponent } from './../invoicedetail/invoicedetail.component';
import { Invoice } from './../../Models/Invoice';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {
  [x: string]: any;

  invocieListInvoices: Invoice[];

  selectedInvoice: Invoice;
  loadcomponent = false;

  OnSelect(invoice: Invoice): void {
    this.loadcomponent = true;
    this.selectedInvoice = invoice;
    this.invoiceDetailService.saveInvoice(invoice);
    this.invoiceService.saveDetailInvoice(invoice);

  }

  setStatus(status: boolean): string {
    //console.log(status);
    if (status) {
      return "Paid";
    }
    else{ 
      return "Not Paid";
    }
  }


  calcTotal(inv: Invoice): number{
    //console.log("calc total var" + inv.invoiceLine);
    let sum = 0;
    let i = inv.invoiceLine;
    i.forEach(element => {
      //console.log("element price for invoice line and quanitty " + element.cost + " " + element.quantity );
      //console.log("q * cost " + element.cost * element.quantity);
      sum = sum + (element.cost * element.quantity);
    });
    //console.log("sum " + sum);
    return sum;

  }


  constructor(private invoiceDetailService: InvoiceDetailService, private invoiceService: InvoiceService){

  }

  ngOnInit() {
    this.invocieListInvoices = this.invoiceService.getInvoiceArr();
  }




}
