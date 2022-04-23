import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { RevenuesService } from '../revenues.service';

type QuantityClassificationResult = 'low' | 'medium' | 'high' | 'none';

interface QuantityClassificationRange {
    min: number;
    max: number;
    classification: QuantityClassificationResult;
}

@Component({
    selector: 'dashboard-revenue',
    templateUrl: 'dashboard-revenues.component.html',
    styleUrls: ['./dashboard-revenues.component.scss']
})
export class DashboardRevenuesComponent implements OnInit {
    public currency: string;
    public availableDates: string[];
    public selectedDate: string;

    constructor(private _currencyService: CurrencyService, private _revenueService: RevenuesService) {
        this.currency = this._currencyService.getCurrency();
        this.availableDates = this.getAvailableDates(3, 3);
        this.selectedDate = this.getCurrentDateFormatted();
    }

    ngOnInit() {
        this._currencyService.currency$.subscribe((currency) => (this.currency = currency));
    }

    /**
     * Get DD-MM-YYYY formatted date
     */
    private _formatGreek(date: Date) {
        return date.toLocaleDateString('el-GR');
    }

    private _getDateByDayOffset(date: Date, offset = 0) {
        const previous = new Date(date.getTime());

        previous.setDate(date.getDate() + offset);

        return previous;
    }

    public onDateChange(value = '') {
        this.selectedDate = value;
    }

    public getCurrentDateFormatted(): string {
        return this._formatGreek(new Date());
    }

    public getAvailableDates(daysBefore = 3, daysAfter = 3) {
        const currentDate = new Date();
        const dates = [];

        for (let i = -daysBefore; i <= daysAfter; i++) {
            dates.push(this._getDateByDayOffset(currentDate, i));
        }

        return dates.map(this._formatGreek);
    }

    public getDailyRevenues(day: string) {
        return this._revenueService.getRevenuesByDay(day);
    }

    private _inRange(value: number, min: number, max: number, inclusive = true): boolean {
        if (inclusive) {
            return value >= min && value <= max;
        } else {
            return value > min && value < max;
        }
    }

    public classifyCarsCount(count: number): QuantityClassificationResult {
        const ranges: QuantityClassificationRange[] = [
            {
                min: 101,
                max: 150,
                classification: 'low'
            },
            {
                min: 151,
                max: 200,
                classification: 'medium'
            },
            {
                min: 201,
                max: 255,
                classification: 'high'
            }
        ];

        for (const r of ranges) {
            if (this._inRange(count, r.min, r.max)) {
                return r.classification;
            }
        }

        return 'none';
    }

    public classifyRevenue(revenue: number): QuantityClassificationResult {
        const ranges: QuantityClassificationRange[] = [
            {
                min: 100,
                max: 550,
                classification: 'low'
            },
            {
                min: 551,
                max: 2575,
                classification: 'medium'
            },
            {
                min: 2576,
                max: 4500,
                classification: 'high'
            }
        ];

        for (const r of ranges) {
            if (this._inRange(revenue, r.min, r.max)) {
                return r.classification;
            }
        }

        return 'none';
    }
}
