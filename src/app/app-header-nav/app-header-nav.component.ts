import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './app-header-nav.component.html',
  styleUrls: ['./app-header-nav.component.scss']
})
export class AppHeaderNavComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  public isAuthenticated() {
    return this._authService.isAuthenticated();
  }
}
