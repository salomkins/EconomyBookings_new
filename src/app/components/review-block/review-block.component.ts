import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-block',
  templateUrl: './review-block.component.html',
  styleUrls: ['./review-block.component.scss']
})
export class ReviewBlockComponent implements OnInit {

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
  ngOnInit() {
  }

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
