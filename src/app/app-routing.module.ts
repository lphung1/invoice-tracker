import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { InvoicelistComponent } from './invoice-list/invoicelist.component';
import { Invoice } from './Models/Invoice';
import { CustomerCardComponent } from './customer/customer-card/customer-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathMatch } from 'tough-cookie';
import { InvoicedetailComponent } from './invoicedetail/invoicedetail.component';


const routes: Routes = [{
  path: 'view-customers', component: CustomerCardComponent
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
