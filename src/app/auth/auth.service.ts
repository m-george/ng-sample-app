import { Injectable } from '@angular/core';

// TODO: implement authentication functionality
// this class is just a mockup of an auth service class
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public static readonly TOKEN_LS_NAME = 'token';

    public isAuthenticated(): boolean {
        const token = window.localStorage.getItem(AuthService.TOKEN_LS_NAME);

        return !!token;
    }

    public login() {
        if (!this.isAuthenticated()) {
            window.localStorage.setItem(AuthService.TOKEN_LS_NAME, 'enter_real_token_here');
            window.location.href = '/';
        }
    }

    public logout() {
        if (this.isAuthenticated()) {
            window.localStorage.removeItem(AuthService.TOKEN_LS_NAME);
            window.location.href = '/';
        }
    }
}
