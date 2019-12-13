import { Customer } from 'src/app/Models/Customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  constructor() { }

  ngOnInit() {
  }
  OnSubmit() {
    console.log(this.customer);
  }

}
