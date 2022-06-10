import { ProductModel } from './../../ProductModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productModel!: ProductModel;

  constructor() {
  }

  ngOnInit(): void {

  }

  getRatings(rating: number) {
    return [
      rating >= 1,
      rating >= 2,
      rating >= 3,
      rating >= 4,
      rating >= 5];
  }

}
