import { User } from './Models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // need to enter spring api URL
  url = ""; 
  private user: User;
  constructor(private http: HttpClient) { }

  getUser(thisuser: User): Observable<any> {
    const api = 'api/getuser';
    return this.http.post(this.url + api, thisuser);
  }

}
