import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icons-flags-primitive',
  templateUrl: './icons-flags-primitive.component.html',
  styleUrls: ['./icons-flags-primitive.component.scss']
})
export class IconsFlagsPrimitiveComponent implements OnInit {
  private _flag: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  @Input('flag')
  set flag(value: string) {
    if (this.flag) {
        this.elementRef.nativeElement.classList.remove(this.flag);
    }
    this._flag = value;
    this.elementRef.nativeElement.classList.add(value);
  }

  get flag() {
    return this._flag;
  }

}
