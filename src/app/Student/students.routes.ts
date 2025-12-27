import { Routes } from "@angular/router";
import { StudentslistComponent } from "./studentslist/studentslist.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { HomeComponent } from "./home/home.component";


export const Studentroutes: Routes = [
  // { path: '', redirectTo: 'studentslist', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'studentslist', component: StudentslistComponent },
  { path: 'studentdetailes', component: StudentdetailsComponent }
];