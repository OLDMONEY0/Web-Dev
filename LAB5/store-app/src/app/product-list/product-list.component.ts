import { Component } from '@angular/core';

import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  itemList: Product[] = products;
  onDeleteItem(id:number){
    this.itemList = this.itemList.filter((x) => x.id !== id);
  }

  ngOnInit():void{
  }
}


