import { UserService } from '../service/user.service';
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
    if ((this.thisUser.username == null) || (this.thisUser.password == null)) {
      window.alert('enter username and password');
    } else {

      console.log("login info " + this.thisUser.username + " " + this.thisUser.password);
      //console.log("login info " + this.thisUser.username  + " " + this.thisUser.password);
      //console.log(this.userService.postUser(this.thisUser).subscribe(foos => console.log(foos)));

      this.router.navigate(['dashboard-home']);

      this.userService.postUser(this.thisUser).subscribe(obj => {
        console.log('Login returned: ' + obj);
        this.userService.saveUser(obj);
        this.thisUser = obj; // store a cookie instead
        console.log(this.thisUser);
        this.router.navigate(['/dashboard-home']);
      });
    }

  }
}
