import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist-primitive',
  templateUrl: './checklist-primitive.component.html',
  styleUrls: ['./checklist-primitive.component.scss']
})
export class ChecklistPrimitiveComponent implements OnInit {


  private _checklistStyle = '';
  private _itemStyle = '';
  private _items: String[];
  constructor() { }

  ngOnInit() {
  }

  get checklistStyle(): string {
    return this._checklistStyle;
  }

  get items(): String[] {
    return this._items;
  }

  @Input('items')
  set items(value: String[]) {
    this._items = value;
  }

  @Input('checklistStyle')
  set style(value: string) {
    this._checklistStyle = value;
  }

  get itemStyle(): string {
    return this._itemStyle;
  }

  @Input('itemStyle')
  set itemStyle(value: string) {
    this._itemStyle = value;
  }

}
