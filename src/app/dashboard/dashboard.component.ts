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


  unPaid: number = 0;
  private paidNum: number = 0;
  private invoiceDash: Invoice[];
  accountsRecievable: number = 0;
  private myDate: Date;
  weeklyRevenue: number;
  createdInvoices: number;

  constructor(private invoiceService: InvoiceService, private cookieServ: CookieService) { }

  ngOnInit() {
    // grab user id from cookie
    this.myDate = new Date();
    // http get /invoices?user=id
    const cookieVal = this.cookieServ.get('userId');
    console.log('cookie ' + cookieVal);
    this.invoiceService.getAllInvoice().subscribe(foos  => {

      //console.log("Being saved in ngOnInit" + foos );
      this.invoiceService.saveArr(foos );
      this.invoiceDash = this.invoiceService.getInvoiceArr();
      //console.log("Invoice id for invoice dash arr " + this.invoiceDash[0].invoiceId);
      console.log("Size " + this.invoiceDash.length);

    });


    this.calcUnpaid();

    // this.invoiceDash = this.service.getAllInvoice();


  }

  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    //this.calcUnpaid();


  }

  ngAfterViewInit() {

    this.calcUnpaid();
    this.calcAccountsRecievable();
    this.calcWeeklyRevenue();

  }


  calcUnpaid() {
    this.unPaid = 0;
    this.invoiceDash.forEach(element => {
      console.log("checking unpaid plus one");
      if (element.paidStatus == false) {
        this.unPaid = this.unPaid + 1;
      }
    });

  }

  calcAccountsRecievable() {

    this.accountsRecievable = 0;

    this.invoiceDash.forEach(element => {
      if(element.paidStatus == false){
        this.accountsRecievable = this.accountsRecievable + this.calcTotal(element);
      }
    });

  }

  calcWeeklyRevenue() {
    this.weeklyRevenue = 0;
    this.createdInvoices = 0;
    this.invoiceDash.forEach(element => {
      if (new Date(element.dueDate) > this.myDate && element.paidStatus === true) {
        this.weeklyRevenue = this.weeklyRevenue + this.calcTotal(element);
        this.createdInvoices++;
      }
    });

  }

  calcTotal(inv: Invoice): number {
    // console.log("calc total var" + inv.invoiceLine);
    let sum = 0;
    let i = inv.invoiceLine;
    i.forEach(element => {
      // console.log("element price for invoice line and quanitty " + element.cost + " " + element.quantity );
      // console.log("q * cost " + element.cost * element.quantity);
      sum = sum + (element.cost * element.quantity);
    });
    // console.log("sum " + sum);
    return sum;

  }


  public recentInvoiceTable() {


  }

  public endOfWeek(date){

    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));

  }

}
