import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnText: string = "";
  @Input() btnColour: string = "";
  // @Input() btnFunction: string = "";
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  onClick(){
    console.log("onClick clicked");
    this.btnClick.emit();
  }
}
