import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icons-flags-primitive',
  templateUrl: './icons-flags-primitive.component.html',
  styleUrls: ['./icons-flags-primitive.component.scss']
})
export class IconsFlagsPrimitiveComponent implements OnInit {
  private _flag: string;

  constructor() { }

  ngOnInit() {
  }

  @Input('flag')
  set flag(value: string) {
    this._flag = value;
  }

  get flag() {
    return this._flag;
  }

}
