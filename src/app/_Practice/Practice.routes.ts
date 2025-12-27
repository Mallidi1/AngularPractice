import { Routes } from "@angular/router";
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from "./parent/parent.component";
import { CardComponent } from "./card/card.component";
import { CardListComponent } from "./card-list/card-list.component";

export const Practiceroutes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'card', component: CardComponent },
  { path: 'cardlist/:id', component: CardListComponent }
];
