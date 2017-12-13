import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-primitive',
  templateUrl: './input-primitive.component.html',
  styleUrls: ['./input-primitive.component.scss']
})
export class InputPrimitiveComponent implements OnInit {

  private _typeInput = '';
  private _nameInput = '';
  private _placeholderInput = '';
  private _valueInput = '';

  constructor() { }

  ngOnInit() {
  }

  get typeInput(): string {
    return this._typeInput;
  }
  @Input('typeInput')
  set typeInput(value: string) {
    this._typeInput = value;
  }

  get nameInput(): string {
    return this._nameInput;
  }
  @Input('nameInput')
  set nameInput(value: string) {
    this._nameInput = value;
  }

  get placeholderInput(): string {
    return this._placeholderInput;
  }
  @Input('placeholderInput')
  set placeholderInput(value: string) {
    this._placeholderInput = value;
  }

  get valueInput(): string {
    return this._valueInput;
  }
  @Input('valueInput')
  set valueInput(value: string) {
    this._valueInput = value;
  }

}
