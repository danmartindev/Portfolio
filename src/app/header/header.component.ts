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

  btnState: String = '*';

  constructor(private myRouter: Router) { 
    this.myRouter.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        if(event.url == "/main"){
          console.log("meep");
          this.btnState = '*'
        } else {
          console.log(event.url);
          this.btnState = 'show'
        }
      }
    });
  }

  ngOnInit() {
  }
}
