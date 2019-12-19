import { CustomerService } from './../../customer.service';
import { Customer } from 'src/app/Models/Customer';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
      window.alert('Customer Added!');
      this.customer = new Customer();
      },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred.
        console.log('An error occurred:', err.error.message);
        window.alert('Customer not Added!');
      } else {
        // Backend returns unsuccessful response codes such as 404, 500 etc.
        console.log('Backend returned status code: ', err.status);
        console.log('Response body:', err.error);
        window.alert('Customer not Added!');
      }
    }
    );
  }

}
