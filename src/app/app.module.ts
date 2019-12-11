import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicelistComponent } from './invoice-list/invoicelist.component';
import { InvoicedetailComponent } from './invoicedetail/invoicedetail.component';
import { CustomerCardComponent } from './customer/customer-card/customer-card.component';
import { CustomerCardListComponent } from './customer/customer-card-list/customer-card-list.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { InvoiceHistoryLineChartComponent } from './dashboard/invoice-history-line-chart/invoice-history-line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicelistComponent,
    InvoicedetailComponent,
    CustomerCardComponent,
    CustomerCardListComponent,
    NewInvoiceComponent,
    DashboardComponent,
    InvoiceHistoryLineChartComponent,
    PieChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
