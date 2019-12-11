import { PaymentPortalComponent } from './payment-portal/payment-portal.component';

import { CustomerCardListComponent } from './customer/customer-card-list/customer-card-list.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { InvoicelistComponent } from './invoice-list/invoicelist.component';
import { Invoice } from './Models/Invoice';
import { CustomerCardComponent } from './customer/customer-card/customer-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathMatch } from 'tough-cookie';
import { InvoicedetailComponent } from './invoicedetail/invoicedetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


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
{path: 'dashboard-home', component: DashboardComponent},
{path: 'payment-portal', component: PaymentPortalComponent},
{path: '', redirectTo: '/dashboard-home', pathMatch: 'full'},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
