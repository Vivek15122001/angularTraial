import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _linkValue: string = 'yourAddress';
  public get linkValue(): string {
    return this._linkValue;
  }
  isActive
  constructor() {
  }
  buttonn(num){
    this.isActive=num;
  }
 













}
