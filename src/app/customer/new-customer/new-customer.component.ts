import { Router } from '@angular/router';
import { User } from './../../Models/User';
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
  user: User = new User();
  customer: Customer = new Customer();
  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.user.userId = 2;

  }
  OnSubmit() {
    this.customer.user.userId = 2;
    this.service.Save(this.customer).subscribe(resp => {

      console.log(resp );
      window.alert('Customer Added!');
      this.customer = new Customer();
      this.router.navigate(['/view-customers']);
      },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        
        console.log('An error occurred:', err.error.message);
        window.alert('Customer not Added!');
      } else {
        
        console.log('Backend returned status code: ', err.status);
        console.log('Response body:', err.error);
        window.alert('Customer not Added!');
      }
    }
    );
  }

}
