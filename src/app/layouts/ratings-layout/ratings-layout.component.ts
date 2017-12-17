import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-layout',
  templateUrl: './ratings-layout.component.html',
  styleUrls: ['./ratings-layout.component.scss']
})
export class RatingsLayoutComponent implements OnInit {

rList = [
  {'item' : 'Overall value for money of your car rental', 'value' : '8.3'},
  {'item' : 'How easy was it to find pickup location?', 'value' : '8.2'},
  {'item' : 'Work efficiency of the car rental agents', 'value' : '8.4'},
  {'item' : 'Time spent picking up the car', 'value' : '8.5'},
  {'item' : 'Time spent dropping off the car', 'value' : '7.9'},
  {'item' : 'Car cleanliness', 'value' : '7.6'},
  {'item' : 'Overall condition of the car', 'value' : '7.8'}
];

  constructor() { }
  ngOnInit() {
  }

}
