import {Component, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  filterProducts: Product[] = products;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryFromRoute = routeParams.get('name');

    // Find the product that correspond with the id provided in route.
    this.filterProducts =  this.filterProducts.filter((x) => x.category == categoryFromRoute);
  }
  onDeleteItem(id:number){
    this.filterProducts = this.filterProducts.filter((x) => x.id !== id);
  }
}
