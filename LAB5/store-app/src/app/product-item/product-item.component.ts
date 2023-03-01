import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Product} from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent  {
  @Input() item!: Product;
  @Output() remove = new EventEmitter();
  like: number = 0;
  ngOnInit():void{

  }
  share(url : string) {
    window.open(url, "_blank");
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  deleteItem(){
    this.remove.emit(this.item.id);
  }
  likeIncrease(){
    this.like++;
  }
}