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

  customerList: Customer[];


  ngOnInit() {
    this.service.GetAllCustomers().subscribe(Response => {
      console.log(Response);
      this.customerList = Response;
    });
  }
}
