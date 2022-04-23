import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public currency = '';

  constructor(private _currencyService : CurrencyService) { 
    _currencyService.currency$.subscribe(value => this.currency = value);
  }

  ngOnInit(): void {
  }

}
