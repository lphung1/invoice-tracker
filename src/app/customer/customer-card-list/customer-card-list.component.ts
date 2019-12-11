import { Customer } from './../../Models/Customer';
import { Component, OnInit } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';

@Component({
  selector: 'app-customer-card-list',
  templateUrl: './customer-card-list.component.html',
  styleUrls: ['./customer-card-list.component.css']
})
export class CustomerCardListComponent implements OnInit {

  constructor() { }

  customerList: Customer[] = [
    {customerId: 1, firstName: 'Sam', lastName: 'hills', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131}, 
    {customerId: 2, firstName: 'Tom', lastName: 'smith', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131},
    {customerId: 3, firstName: 'Dan', lastName: 'pickles', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131},
    {customerId: 4, firstName: 'Peter', lastName: 'jenkins', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131},

  ]


  ngOnInit() {
  }

}
