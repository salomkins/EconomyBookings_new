import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-block',
  templateUrl: './review-block.component.html',
  styleUrls: ['./review-block.component.scss']
})
export class ReviewBlockComponent implements OnInit {

  RATINGS = [
    'Hrenovo',
    'Hrenovato',
    'Počti Normaļno',
    'Normaļno',
    'Very Normaļno',
    'Good',
    'Very Good',
    'Perfect',
    'Awesome',
    'Exceptional'
  ];
  ratingTxt = this.RATINGS[0];

  _userData: {
    name: string,
    country: string,
    countryCode: string,
    date: string,
    rating: number
  };
  _reviewsPlus: string[];
  _reviewsMinus: string[];

  constructor() { }
  ngOnInit() { }

  get userData(): {
    name: string,
    country: string,
    countryCode: string,
    date: string,
    rating: number
  } {
    return this._userData;
  }
  @Input('userData')
  set userData(value: {
    name: string,
    country: string,
    countryCode: string,
    date: string,
    rating: number
  }) {
    this._userData = value;
    var i = Math.round(value.rating - 1 - .25);
    i = (i < 0) ? 0 : i;
    i = (i > 9) ? 9 : i;
    this.ratingTxt = this.RATINGS[i];
  }

  get reviewsPlus(): string[] {
    return this._reviewsPlus;
  }
  @Input('reviewsPlus')
  set reviewsPlus(value: string[]) {
    this._reviewsPlus = value;
  }

  get reviewsMinus(): string[] {
    return this._reviewsMinus;
  }
  @Input('reviewsMinus')
  set reviewsMinus(value: string[]) {
    this._reviewsMinus = value;
  }
}
