import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

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
  //if ((this.LoginForm.get('loginId').value) && (this.LoginForm.get('password').value))
 {
   
  this.router.navigate(['dashboard-home']);
  }
}

}
