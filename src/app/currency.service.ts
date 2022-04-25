import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

/**
 * Service responsible for providing/updating the currently selected currency to/from components
 */

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    public static readonly AVAILABLE_CURRENCIES = [
        {
            name: 'Euro',
            symbol: '€'
        },
        {
            name: 'USD',
            symbol: '$'
        }
    ];

    private _currencySource = new BehaviorSubject<string>(CurrencyService.AVAILABLE_CURRENCIES[0].symbol);

    public readonly currency$ = this._currencySource.asObservable();

    constructor() {}

    public getCurrency() {
        return this._currencySource.value;
    }

    public setCurrency(currency: string) {
        this._currencySource.next(currency);
    }
}
