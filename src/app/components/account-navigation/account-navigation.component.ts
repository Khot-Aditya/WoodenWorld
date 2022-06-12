import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-navigation',
  templateUrl: './account-navigation.component.html',
  styleUrls: ['./account-navigation.component.css']
})
export class AccountNavigationComponent implements OnInit {



  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  getUrl(url: string) {
    return this.router.url === '/account/' + url ? 'text-accent-600' : 'text-gray-800'
  }

}
