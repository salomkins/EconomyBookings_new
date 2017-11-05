import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-button-primitive',
  templateUrl: './store-button-primitive.component.html',
  styleUrls: ['./store-button-primitive.component.scss']
})
export class StoreButtonPrimitiveComponent implements OnInit {

  private _size = '';
  private _brand = '';
  private _color = '';

  constructor() { }

  ngOnInit() {
  }

  get size(): string {
    return this._size;
  }

  @Input('size')
  set size(value: string) {
    this._size = value;
  }

  get brand(): string {
  return this._brand;
}

  @Input('brand')
  set style(value: string) {
    this._brand = value;
  }

  get color(): string {
    return this._color;
  }

  @Input('color')
  set color(value: string) {
    this._color = value;
  }

}
