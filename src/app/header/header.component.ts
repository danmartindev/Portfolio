import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private myRouter: Router) { 
    this.myRouter.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log(event.url);
      }
    });
  }

  ngOnInit() {
  }

  

}
