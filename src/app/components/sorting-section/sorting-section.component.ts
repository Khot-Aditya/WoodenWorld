import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-section',
  templateUrl: './sorting-section.component.html',
  styleUrls: ['./sorting-section.component.css']
})
export class SortingSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getSortByValues() {
    return [
      {
        "title": "Relevance",
        "value": "relevance"
      },
      {
        "title": "Highest Priced",
        "value": "highest_priced"
      },
      {
        "title": "Lowest Priced",
        "value": "lowest_priced"
      },
      {
        "title": "Fastest Shipping",
        "value": "fastest_shipping"
      },
      {
        "title": "Newest",
        "value": "newest"
      }
    ]
  }

  getBrandNames() {
    return [
      "Woodsworth",
      "Fabuliv",
      "Bohemiana",
      "Amberville",
      "Expressionist by mohanbir",
      "Mudramark",
      "CasaCraft",
      "Crystal Furnitech",
      "Nilkamal",
      "Home Centre",
      "Durian",
      "A GLOBIA CREATIONS",
      "Claymint",
      "Ekome",
      "Mintwud",
      "SAYO",
      "CasaGold",
      "Bantia Furniture",
      "Furnmill",
      "HomeTown",
      "GUDSMITH",
      "@home",
      "Orange Tree",
      "Spacewood",
      "Workspace by Azazo",
      "Couchette",
      "Delite kom",
      "FuturDecor",
      "Klaxon",
      "Wood you",
      "Colibri",
      "Furncasa",
      "Muebles Casa",
      "ONLINE E TRADE",
      "TADesign",
      "Fonzel",
      "Riyan Luxiwood",
      "ValueWud",
      "Zorin",
      "Aakriti art creations",
      "Birdy",
      "Cubo",
      "Evok",
      "Forzza by Akshay Furniture",
      "Godrej Interio",
      "Home Wud",
      "HomeAce",
      "Objectry",
      "Strawberry Collective",
      "Trevi Furniture",
      "Ventuos",
      "Wakefit",
      "fullstock",
      "ARRA",
      "Eros",
      "Fine Group",
      "Italica",
      "Logam",
      "Prima",
      "Rajtai Shree",
      "Space Genie",
      "Spacex",
      "Tarz I hayal",
      "Valla",
      "Ventura",
      "Woodhub",
      "Yol"
    ]
  }

  getPrices() {
    return [
      "Under ₹ 6,000",
      "₹ 6,000 to ₹ 10,000",
      "₹ 10,000 to ₹ 20,000",
      "Over ₹ 20,000"
    ]
  }

}
