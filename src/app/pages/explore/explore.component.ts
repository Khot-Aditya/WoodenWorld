import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/ProductModel';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  getBestSellers() {
    var productModel = new ProductModel();
    productModel.productId = 1001;
    productModel.name = "Kaylee 3 Seater Velvet Sofa In Blush Pink Color (50% off)";
    productModel.thumbnail = "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    productModel.price = "52,920";
    productModel.savings = "35,079";
    productModel.ManufacturingPrice = "87,999"
    productModel.brand = "CasaCraft";
    productModel.rating = 2;


    return [
      productModel,
      productModel,
      productModel,
      productModel,
      productModel,
      productModel,
      productModel,
      productModel,
      productModel,
      productModel
    ]
  }
}
