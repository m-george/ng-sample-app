import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
    selector: 'dashboard-revenue',
    templateUrl: 'dashboard-revenues.component.html'
})

export class DashboardRevenuesComponent implements OnInit {

    public currency = '$';

    constructor(private _currencyService : CurrencyService) { }

    ngOnInit() {
        this._currencyService.currency$.subscribe((currency => {
            this.currency = currency;
        }));
     }
}