import { UserService } from './../user.service';
import { User } from './../Models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  element: HTMLElement;
  thisUser: User = new User();


  constructor(private router: Router, private userService: UserService) { }


  ngOnInit() {

  }
  onSubmit() {
    if ((this.thisUser.userName == null) || (this.thisUser.password == null)) {
      window.alert('enter username and password');
    } else {

      console.log(this.userService.postUser(this.thisUser).subscribe(user => console.log(user)));

      //this.router.navigate(['dashboard-home']) ;

    }

  }
}
