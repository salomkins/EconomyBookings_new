import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headings-primitive',
  templateUrl: './headings-primitive.component.html',
  styleUrls: ['./headings-primitive.component.scss']
})
export class HeadingsPrimitiveComponent implements OnInit {

  private _usage = '';

  constructor() {
    this.usage = 'section';
  }

  ngOnInit() {
  }

  get usage(): string {
    return this._usage;
  }

  @Input('usage')
  set usage(value: string) {
    this._usage = value;
  }

}
