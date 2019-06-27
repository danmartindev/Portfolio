import { Component, OnInit } from '@angular/core';
import { dropDown, mainAnim, collapser } from '../animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    collapser,
    dropDown,
    mainAnim
  ]
})
export class WorkComponent implements OnInit {

  cState="*"
  constructor() { }

  ngOnInit() {
  }

  collapse(){
    console.log("clicked");
    if(this.cState == "*"){
      this.cState = "expanded";
    } else {
      this.cState = "*";
    }
  }
  
}
