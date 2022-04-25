import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrencyService } from '../../currency.service';

@Component({
    selector: 'dashboard-settings',
    templateUrl: './settings.component.html'
})
export class DashboardSettingsComponent implements OnInit {
    public currencies = CurrencyService.AVAILABLE_CURRENCIES;
    public currencyForm: FormGroup;
    public saved: null | number = null;

    constructor(private _currencyService: CurrencyService) {
        this.currencyForm = new FormGroup({
            currency: new FormControl(_currencyService.getCurrency())
        });
    }

    ngOnInit() {
        this._currencyService.currency$.subscribe((currency) => {});
    }

    private _displaySuccessMessage() {
        if (this.saved) {
            window.clearTimeout(this.saved);
        }

        this.saved = window.setTimeout(() => {
            this.saved = null;
        }, 3000);
    }

    public onCurrencySubmit(form: FormGroup) {
        this._currencyService.setCurrency(form.value.currency);
        this._displaySuccessMessage();
    }
}
