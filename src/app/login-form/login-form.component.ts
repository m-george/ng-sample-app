import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  protected submitted = false;
  public loginForm : FormGroup;

  constructor(private _authService: AuthService, private _router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    if(this._authService.isAuthenticated()) this._router.navigate(['/']);
  }

  onSubmit(value: any): void {
    console.log(value);
    this.submitted = true;

    this._authService.login();
  }

}
