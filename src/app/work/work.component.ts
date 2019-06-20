import { Component, OnInit } from '@angular/core';
import { dropDown, mainAnim } from '../animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    dropDown,
    mainAnim
  ]
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
