import { Component } from '@angular/core';

@Component({
  selector: 'app-studentslist',
  imports: [],
  templateUrl: './studentslist.component.html',
  styleUrl: './studentslist.component.css'
})
export class StudentslistComponent {



  goBack() {
    window.history.back();
  }
}
