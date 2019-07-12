import { animateChild } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { mainAnim } from '../animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    mainAnim
  ]
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
