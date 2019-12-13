import { InvoicedetailComponent } from './Invoice/invoicedetail/invoicedetail.component';
import { InvoicelistComponent } from './Invoice/invoice-list/invoicelist.component';
import { NewInvoiceComponent } from './Invoice/new-invoice/new-invoice.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCardComponent } from './customer/customer-card/customer-card.component';
import { CustomerCardListComponent } from './customer/customer-card-list/customer-card-list.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { InvoiceHistoryLineChartComponent } from './dashboard/invoice-history-line-chart/invoice-history-line-chart.component';
import { PieChartComponent } from './dashboard/pie-chart/pie-chart.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';


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
    PaymentPortalComponent,
    LoginPageComponent,
    NavBarComponent,
    NewCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
