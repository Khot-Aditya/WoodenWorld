import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.css']
})
export class NavigationDrawerComponent implements OnInit {

  furnitureArray: string[];
 

  constructor() {
    this.furnitureArray = [
      "Sofa Chairs",
      "Dining Tables",
      "Mattresses",
      "Kids Furnishings",
      "Entertainment Units",
      "Coffee Table",
      "Wardrobes",
      "Reclinears",
      "Seating",
      "Study Tables",
      "Kids Storage",
      "Bookshelves",
      "Shoe Racks",
      "Essentials",
      "Wardrobes",
      "Other"
    ]


  }

  ngOnInit(): void {
  }

}
