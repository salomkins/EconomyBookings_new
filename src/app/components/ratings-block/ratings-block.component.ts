import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-block',
  templateUrl: './ratings-block.component.html',
  styleUrls: ['./ratings-block.component.scss']
})

export class RatingsBlockComponent implements OnInit {

  private _ratingsList: [{ item: string, value: string }];

  constructor() { }

  ngOnInit() {
  }

  get ratingsList(): [{ item: string, value: string }] {
    return this._ratingsList;
  }
  @Input('ratingsList')
  set ratingsList(value: [{ item: string, value: string }]) {
    this._ratingsList = value;
  }

}
