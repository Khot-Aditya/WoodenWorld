import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.css']
})
export class NavigationDrawerComponent implements OnInit {

  signedIn: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  getAccountInfo() {
    return JSON.parse('{ "name":"Aditya Khot", "avatar":"https://avatars.githubusercontent.com/u/66156452?v=4" }');
  }

  getFurnitureArray():string[] {
    return [
      "Sofa Chairs",
      "Dining Tables",
      "Mattresses",
      "Kids Furnishings",
      "Entertainment Units",
      "Coffee Table",
      "Wardrobes",
      "Recliners",
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
}
