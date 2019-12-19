import { Customer } from 'src/app/Models/Customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/invoiceTracker/api/';


  Save(customer: Customer): Observable<any> {
    const api = 'addcustomer';
    //console.log('service save ' + this.url + api);
    return this.http.post(this.url + api, customer);
  }

  GetAllCustomers(): Observable<any> {
   const api = 'customers/?userId=2';
   return this.http.get(this.url + api);
   }

   

}
