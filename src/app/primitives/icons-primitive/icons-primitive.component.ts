import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icons-primitive',
  templateUrl: './icons-primitive.component.html',
  styleUrls: ['./icons-primitive.component.scss']
})
export class IconsPrimitiveComponent implements OnInit {

  private _iconStyle: string;

  constructor() { }

  ngOnInit() {
  }
  @Input('icon')
  set size(value: string) {
    this._iconStyle = value;
  }
  get iconStyle(): string {
    return this._iconStyle;
  }
}
