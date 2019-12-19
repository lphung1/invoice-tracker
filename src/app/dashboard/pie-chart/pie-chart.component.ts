import { Invoice } from './../../Models/Invoice';
import { InvoiceService } from './../../service/invoice.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {


  paidInvoice: number;
  overDueInvoice: number;
  openInvoice: number;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  invoiceArr: Invoice [];

  public pieChartLabels: Label[] = ['Over Due Invoices', 'Paid Invoices', 'Open Invoices'];
  public pieChartData: SingleDataSet = [this.overDueInvoice, this.paidInvoice, this.openInvoice ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  constructor(private invoService: InvoiceService) { }

  ngOnInit() {

    this.openInvoice = 0;
    this.paidInvoice = 0;
    this.overDueInvoice = 0;

    this.invoiceArr = this.invoService.getInvoiceArr();

    this.calcOverDue();
    this.calcPaid();

    this.pieChartData = [this.overDueInvoice, this.paidInvoice, this.openInvoice];

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.calcOverDue();
    this.calcPaid();
    this.pieChartData = [this.overDueInvoice, this.paidInvoice, this.openInvoice];
    
  }

  calcPaid() {
    this.paidInvoice = 0;
    this.invoiceArr.forEach(element => {
      if (element.paidStatus === true) {
        this.paidInvoice++;
      }
    });

  }

  calcOverDue() {

    this.overDueInvoice = 0;
    this.openInvoice = 0;
    const myDate = new Date();


    this.invoiceArr.forEach(element => {

      //console.count("Dates, Due, now " + new Date(element.dueDate) + "-- " + myDate);
      if(new Date(element.dueDate) > myDate) {

        //console.log("Date after today");
        this.overDueInvoice++;

      }
    });

    this.openInvoice = (this.invoiceArr.length - this.paidInvoice) - this.overDueInvoice ;

  }


}
