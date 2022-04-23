import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrencyService } from '../currency.service';

@Component({
    selector: 'dashboard-settings',
    templateUrl: 'dashboard-settings.component.html'
})
export class DashboardSettingsComponent implements OnInit {
    public currencies = CurrencyService.AVAILABLE_CURRENCIES;
    public currencyForm: FormGroup;

    constructor(private _currencyService: CurrencyService) {
        this.currencyForm = new FormGroup({
            currency: new FormControl(_currencyService.getCurrency())
        });
    }

    ngOnInit() {
        this._currencyService.currency$.subscribe((currency) => {});
    }

    public onCurrencySubmit(form: FormGroup) {
        this._currencyService.setCurrency(form.value.currency);
    }
}
