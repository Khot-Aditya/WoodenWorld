import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigation-bar',
  templateUrl: './header-navigation-bar.component.html',
  styleUrls: ['./header-navigation-bar.component.css']
})
export class HeaderNavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    return document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20;
  }
}
