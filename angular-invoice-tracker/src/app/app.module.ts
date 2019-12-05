import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicelistComponent } from './invoice-list/invoicelist.component';
import { InvoicedetailComponent } from './invoicedetail/invoicedetail.component';
import { CustomerCardComponent } from './customer/customer-card/customer-card.component';
import { CustomerCardListComponent } from './customer/customer-card-list/customer-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicelistComponent,
    InvoicedetailComponent,
    CustomerCardComponent,
    CustomerCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
