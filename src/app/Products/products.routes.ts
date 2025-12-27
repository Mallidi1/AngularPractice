import { Routes } from "@angular/router";
import { ProductsGridComponent } from "./products-grid/products-grid.component";


export const productsroutes: Routes = [
  { path: 'productsgrid', component: ProductsGridComponent },
  { path: '', redirectTo: 'productsgrid', pathMatch: "full" }
]