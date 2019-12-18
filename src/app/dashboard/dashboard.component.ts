import { InvoiceService } from './../service/invoice.service';
import { Invoice } from './../Models/Invoice';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('moveUp', [
      state('void', style({
        // Add the CSS for the hidden state here. Here is 2 examples (camelCase for properties of more than 1 word)
        height: '0',
        borderBottom: 'none'
      })),
      state('*', style({
        // Here, add the CSS of the visible state. You can use the * wildcard to tell Angular 'calculate the value of the height for me'
        height: '*',
        borderBottom: '*'
      })),
      // animate format: 'DURATION [DELAY] EASING-FUNCTION'
      transition(':enter', animate('275ms ease-out')),
      transition(':leave', animate('275ms 275ms ease-in'))
    ])
  ]
})
export class DashboardComponent implements OnInit {


  
  private invoiceDash: Invoice[];

  constructor(private invoiceService: InvoiceService, private cookieServ: CookieService) { }

  ngOnInit() {
    // grab user id from cookie

    // http get /invoices?user=id
    const cookieVal = this.cookieServ.get('userId');
    console.log('cookie ' + cookieVal);
    this.invoiceService.getAllInvoice().subscribe(foos  => {

      console.log("Being saved in ngOnInit" + foos );
      this.invoiceService.saveArr(foos );
      this.invoiceDash = this.invoiceService.getInvoiceArr();
      console.log("Invoice id for invoice dash arr " + this.invoiceDash[0].invoiceId);
      console.log("Size " + this.invoiceDash.length);

    });

    //this.invoiceDash = this.service.getAllInvoice();

  }


  public recentInvoiceTable() {


  }

}
