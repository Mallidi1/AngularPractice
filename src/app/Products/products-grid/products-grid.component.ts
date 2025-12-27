import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardServicesService } from '../../Services/card-services.service';
import { log } from 'console';
import { loadavg } from 'os';
import { createFind } from 'rxjs/internal/operators/find';

@Component({
  selector: 'app-products-grid',
  imports: [NgClass, NgFor],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.css'
})
export class ProductsGridComponent implements OnInit {

  productlist: any
  category: any
  products: any
  constructor(private route: ActivatedRoute, private serv: CardServicesService) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((q) => {
      let cat = q.get('category');
      console.log(cat);

      if (cat) {
        this.category = this.serv.PRODUCTS.filter(p => p.categoryName == cat)
      }
      else {
        this.category = this.serv.PRODUCTS;
      }
      console.log(this.category);

    })
  }
}
