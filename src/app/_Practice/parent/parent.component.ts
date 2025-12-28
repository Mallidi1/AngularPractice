import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  data1: string = "Parent Satish Reddy";
  data2: any = 'Parent Mallidi';
  cData: any;

  constructor() {
    console.log(this.cData);
  }

}
