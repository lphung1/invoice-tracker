import { User } from '../Models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // need to enter spring api URL
  url = 'http://ec2-54-172-38-88.compute-1.amazonaws.com:8080/invoiceTracker/';
  private user: User = new User();
  constructor(private http: HttpClient) { }

  postUser(thisuser: User): Observable<any> {
    const api = 'api/login';

    return this.http.post(this.url + api, thisuser);
  }

  saveUser(currentUser: User) {
    console.log("saved user" + currentUser);
    this.user = currentUser;
  }

  getUser() {
    return this.user;
  }

  getUserFromDb(id: number){
    const api = "api/user?userId="
    return this.http.get(this.url + api + id);
  }


}
