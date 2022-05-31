import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mySubscription: Subscription;

  constructor() {
    this.mySubscription = interval(5000).subscribe((x => {
      this.doStuff();
    }));
  }



  ngOnInit(): void {
  }

  doStuff() {
    
  }
}
