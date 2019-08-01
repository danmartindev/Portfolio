import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { homeSlide } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    homeSlide
  ]
})
export class HeaderComponent implements OnInit {

  //animation state for home btn
  btnState: String = '*';

  //private router for updating btn state on route change
  constructor(private myRouter: Router) { 
    this.myRouter.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        if(event.url == "/main"){
          this.btnState = '*'
        } else {
          this.btnState = 'show'
        }
      }
    });
  }

  ngOnInit() {
  }
}
