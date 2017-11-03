import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-primitive',
  templateUrl: './rating-primitive.component.html',
  styleUrls: ['./rating-primitive.component.scss']
})
export class RatingPrimitiveComponent implements OnInit {
  private _rating: number;
  constructor() { }

  ngOnInit() {
  }

  get rating(): number {
    return this._rating;
  }

  @Input('rating')
  set rating(value: number) {
    this._rating = value;
  }

}
