import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) {

    console.log(this.router.serializeUrl)

    // this.router.navigate(['login']);
   }

  ngOnInit(): void {
  }

}
