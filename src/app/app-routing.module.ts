import { InvoicelistComponent } from './Invoice/invoice-list/invoicelist.component';
import { NewInvoiceComponent } from './Invoice/new-invoice/new-invoice.component';
import { InvoicedetailComponent } from './Invoice/invoicedetail/invoicedetail.component';

import { CustomerCardListComponent } from './customer/customer-card-list/customer-card-list.component';

import { Invoice } from './Models/Invoice';
import { CustomerCardComponent } from './customer/customer-card/customer-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathMatch } from 'tough-cookie';



const routes: Routes = [{
  path: 'view-customers', component: CustomerCardListComponent
},
{
  path: 'list-invoices', component: InvoicelistComponent
},
{
  path: 'list-invoicesDetails', component: InvoicedetailComponent
},
{ path: 'new-invoice', component: NewInvoiceComponent },
{path: '', redirectTo: '/list-invoices', pathMatch: 'full'},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
