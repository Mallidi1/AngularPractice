import { Component } from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  imports: [],
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css'
})
export class StudentdetailsComponent {

  goBack() {
    window.history.back();
  }


}
