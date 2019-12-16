import { NewCustomerComponent } from './customer/new-customer/new-customer.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { InvoicelistComponent } from './Invoice/invoice-list/invoicelist.component';
import { NewInvoiceComponent } from './Invoice/new-invoice/new-invoice.component';
import { InvoicedetailComponent } from './Invoice/invoicedetail/invoicedetail.component';

import { CustomerCardListComponent } from './customer/customer-card-list/customer-card-list.component';

import { Invoice } from './Models/Invoice';
import { CustomerCardComponent } from './customer/customer-card/customer-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathMatch } from 'tough-cookie';
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
{path: '', redirectTo: '/log-in', pathMatch: 'full'},
{path: 'log-in', component: LoginPageComponent},
{path: 'new-customer', component: NewCustomerComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
