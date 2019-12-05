import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCardComponent } from './customer/customer-card/customer-card.component';
import { CustomerCardListComponent } from './customer-card-list/customer-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCardComponent,
    CustomerCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
