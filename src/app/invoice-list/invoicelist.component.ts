import { InvoicedetailComponent } from './../invoicedetail/invoicedetail.component';
import { Invoice } from '../Models/Invoice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {

  invocies: Invoice[] = [
    // tslint:disable-next-line: max-line-length
    { invoiceId: 1, customer: 'Dr Nice', genDate: new Date('2019-12-01'), amount: 2500, dueDate: new Date('2019-12-16'), status: 'unPaid' },
    // tslint:disable-next-line: max-line-length
    { invoiceId: 2, customer: 'Dr New', genDate: new Date('2019-12-01'), amount: 2500, dueDate: new Date('2019-12-16'), status: 'unPaid' },
    // tslint:disable-next-line: max-line-length
    { invoiceId: 3, customer: 'Dr Blue', genDate: new Date('2019-12-01'), amount: 2500, dueDate: new Date('2019-12-16'), status: 'unPaid' },
    // tslint:disable-next-line: max-line-length
    { invoiceId: 4, customer: 'Dr Red', genDate: new Date('2019-12-01'), amount: 2500, dueDate: new Date('2019-12-16'), status: 'unPaid' },
    // tslint:disable-next-line: max-line-length
    { invoiceId: 5, customer: 'Dr No', genDate: new Date('2019-12-01'), amount: 2500, dueDate: new Date('2019-12-16'), status: 'unPaid' },
    // tslint:disable-next-line: max-line-length
    { invoiceId: 6, customer: 'Dr Dan', genDate: new Date('2019-12-01'), amount: 2500, dueDate: new Date('2019-12-16'), status: 'unPaid' },
    // tslint:disable-next-line: max-line-length
    { invoiceId: 7, customer: 'Dr Pickles', genDate: new Date('2019-12-01'), amount: 2500, dueDate: new Date('2019-12-16'), status: 'unPaid' }, 
  ];

  
  selectedInvoice: Invoice;
  loadcomponent = false;
  OnSelect(invoice: Invoice): void {
    this.loadcomponent = true;
    this.selectedInvoice = invoice;
    //this.router.navigate(['/list-invoicesDetails']);
  }
  constructor() { }

  ngOnInit() {
  }

}
