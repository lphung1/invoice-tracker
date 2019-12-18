import { CookieService } from 'ngx-cookie-service';
import { User } from './../Models/User';
import { UserService } from './user.service';
import { Invoice } from '../Models/Invoice';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  url = 'http://localhost:8080/invoiceTracker/api/';

  private invoice: Invoice;
  private invoiceArr: Invoice [];

  getAllInvoice(): Observable<any> {
    const loggedUser = this.userServ.getUser();
    const userIdCookieVal = this.cookieServ.get('userId');
    const api = 'invoice?userId=' + 1;
    console.log("api " + api);
    console.log("cookie val " + userIdCookieVal);
    return this.http.get(this.url + api);
  }

  saveArr(thisInvoiceArr: Invoice []): void {
    console.log('saveArr thisInvoiceArray: ' + thisInvoiceArr);
    this.invoiceArr = thisInvoiceArr;
  }

  getInvoiceArr(): Invoice[] {
    return this.invoiceArr;
  }

  saveDetailInvoice(inv: Invoice): void {
    this.invoice = inv;
  }

  getDetailInvoice(){
    return this.invoice;
  }



  constructor(private http: HttpClient, private userServ: UserService, private cookieServ: CookieService) { }
}
