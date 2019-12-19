import { CustomerService } from './../../customer.service';
import { Customer } from './../../Models/Customer';
import { Component, OnInit } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-card-list',
  templateUrl: './customer-card-list.component.html',
  styleUrls: ['./customer-card-list.component.css']
})
export class CustomerCardListComponent implements OnInit {

  constructor(private service: CustomerService) { }

  customerList: Customer[] = [
   // {customerId: 1, customerFirstName: 'Sam', customerLastName: 'hills', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131}, 
   // {customerId: 2, customerFirstName: 'Tom', customerLastName: 'smith', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131},
   // {customerId: 3, customerFirstName: 'Dan', customerLastName: 'pickles', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131},
   // {customerId: 4, customerFirstName: 'Peter', customerLastName: 'jenkins', customerAddress: '1234 someStreet rd', customerEmail: 'someEmail@domain.com', customerCity: 'randomCity', customerState: 'Florida', customerPhoneNumber: 1235432131},
  ];


  ngOnInit() {
    this.service.GetAllCustomers().subscribe(Response => {
      this.customerList = Response;
    });
  }
}
