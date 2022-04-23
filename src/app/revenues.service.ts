import { Injectable } from '@angular/core';

interface Revenues {
  hour: string;
  carsCount: number;
  revenue: number;
}

@Injectable({
  providedIn: 'root'
})
export class RevenuesService {
  private dailyRevenues: {
    [day : string] : Revenues[]
  } = {};

  /**
   * Returns a random int between min and max (inclusive)
   */
  private _getRandomIntInclusive(min: number, max: number): number {
      return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
  }

  private _generateRevenues(): Revenues[] {
    return Array(24).fill(0).map((__,index) => {
      return {
        hour: String(index).padStart(2, '0') + ':00',
        carsCount: this._getRandomIntInclusive(101,255),
        revenue: this._getRandomIntInclusive(100,4500)
      }
    });
  }

  public getRevenuesByDay(day: string) {
    if(this.dailyRevenues[day]) return this.dailyRevenues[day];

    // generate and store revenues for selected day
    this.dailyRevenues = {
      ...this.dailyRevenues,
      [day]: this._generateRevenues()
    };

    return this.dailyRevenues[day];
  }

}
