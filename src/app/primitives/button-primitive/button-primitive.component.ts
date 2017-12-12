import {Component, Input, OnInit} from '@angular/core';

// const allowedStyles = [
//     'main',
//     'outline'
// ];

const ALLOWED_TAGS = ['a', 'button', 'span'];

@Component({
  selector: 'app-button-primitive',
  templateUrl: './button-primitive.component.html',
  styleUrls: ['./button-primitive.component.scss']
})
export class ButtonPrimitiveComponent implements OnInit {

  private _size = '';
  private _style = '';
  private _tag = '';

  constructor() {
    this.tag = ALLOWED_TAGS[0] && ALLOWED_TAGS[0] || 'a';
  }

  ngOnInit() {
  }


  get size(): string {
    return this._size;
  }

  @Input('size')
  set size(value: string) {
    this._size = value;
  }

  get style(): string {
    return this._style;
  }

  @Input('stils')
  set style(value: string) {
    this._style = value;
    // if(allowedStyles.includes(value)) {
    //   this._style = value;
    // }
  }

  @Input('tag')
  set tag(value: string) {
    if (ALLOWED_TAGS.includes(value)) {
      this._tag = value;
    }
  }

  get tag(): string {
    return this._tag;
  }
}
