import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-primitive',
  templateUrl: './input-primitive.component.html',
  styleUrls: ['./input-primitive.component.scss']
})
export class InputPrimitiveComponent implements OnInit {

  private _styleInput = '';
  private _typeInput = '';
  private _nameInput = '';
  private _placeholderInput = '';

  constructor() { }

  ngOnInit() {
  }

  get styleInput(): string {
    return this._styleInput;
  }
  get typeInput(): string {
    return this._typeInput;
  }
  get nameInput(): string {
    return this._nameInput;
  }
  get placeholderInput(): string {
    return this._placeholderInput;
  }

  @Input('styleInput')
  set styleInput(value: string) {
    this._styleInput = value;
  }
  @Input('typeInput')
  set typeInput(value: string) {
    this._typeInput = value;
  }
  @Input('nameInput')
  set nameInput(value: string) {
    this._nameInput = value;
  }
  @Input('placeholderInput')
  set placeholderInput(value: string) {
    this._placeholderInput = value;
  }

}
