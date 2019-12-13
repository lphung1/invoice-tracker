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



  constructor(private router: Router) { }
LoginForm: FormGroup;

  ngOnInit() {


    this.LoginForm = new FormGroup ({
      loginId: new FormControl(this.LoginForm, [
        Validators.required
      ] ),
      password: new FormControl(this.LoginForm, [
        Validators.required
      ] )
    });
  }
get loginId() { return this.LoginForm.get('loginId'); }
get password() { return this.LoginForm.get('password'); }

onSubmit() {
  //if((this.loginId.value) && (this.password.value))
 {
  console.log(document.getElementById('loginId'));
  this.router.navigate(['dashboard-home']);
  }
}

}
