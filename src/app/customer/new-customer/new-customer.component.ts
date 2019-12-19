import { CustomerService } from './../../customer.service';
import { Customer } from 'src/app/Models/Customer';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  constructor(private service: CustomerService) { }

  ngOnInit() {
  }
  OnSubmit() {
    this.service.Save(this.customer).subscribe(resp => {
      console.log(resp );
      if( resp != null) {
        window.alert('Customer Added!');
        this.customer = new Customer();
      }
    });
  }

}
