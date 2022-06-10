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

  getDimensions() {
    return [
      "Height 10 in - 44 in",
      "Width 15 in - 54 in",
      "Depth 13 in - 54 in"
    ]
  }

  getStyles() {
    return [
      "Modern",
      "Contemporary",
      "Traditional",
      "Transitional",
      "Industrial",
      "Mid Century",
      "Eclectic",
      "Indian Ethnic",
      "Mid-Century Modern"
    ]
  }

  getMaterial() {
    return [
      "Engineered Wood",
      "Sheesham Wood",
      "Mango Wood",
      "Metal",
      "Glass",
      "Iron",
      "Acacia Wood",
      "Teak Wood",
      "Rubber Wood",
      "Plastic",
      "Steel",
      "Marble",
      "Solid Wood",
      "Reclaimed Wood",
      "Wood",
      "Beech Wood",
      "Oak Wood",
      "Fabric",
      "MDF",
      "MDF with Veneer",
      "Pine Wood",
      "Ply Wood",
      "Stone",
      "Leatherette",
      "Velvet Fabric",
      "Wicker/Rattan",
      "Top Material",
      "Solid Wood",
      "Engineered Wood",
      "Glass",
      "Marble",
      "Plastic",
      "Stone",
      "Rubber Wood",
      "Metal",
      "MDF with Veneer",
      "Cane",
      "Fabric",
      "Wicker",
    ]
  }

  getDiscounts() {
    return [
      "10% and Above",
      "20% and Above",
      "30% and Above",
      "40% and Above",
      "50% and Above",
      "60% and Above",
      "70% and Above",
      "80% and Above",
      "90% and Above"
    ]
  }
}
