import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'dashboard-logout',
    templateUrl: 'dashboard-logout.component.html'
})
export class DashboardLogoutComponent implements OnInit {
    constructor(private _authService: AuthService) {}

    ngOnInit() {}

    public logout() {
        this._authService.logout();
    }
}
