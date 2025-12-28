import { Component, EventEmitter, Input, Output } from '@angular/core';
import { log } from 'console';


@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  val: any
  d2: any = "Child";
  message: any = 'Data from child to parent'

  @Input() d1: string | undefined;
  @Output() custome = new EventEmitter();

  constructor() {
    // console.log(this.d1);
  }

  passtoparent() {
    this.custome.emit(this.message)
    console.log(this.custome);
  }

  goBack() {
    window.history.back();
  };

  templeteref(e: HTMLInputElement) {
    console.log(e.value);
    // this.val = e.value
  }
}
