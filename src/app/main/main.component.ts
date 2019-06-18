import { Component } from '@angular/core';
import { fadeUp, mainAnim } from '../animations';

export interface Link {
  image: string,
  text: string,
  isHidden: boolean,
  state: any
}

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    fadeUp,
    mainAnim
  ]
})

export class MainComponent {

  // Links of main page //
  links: Link[] = [
    {image: "memory", text: "My Work", isHidden: true, state: '*'},
    {image: "tag_faces", text: "About Me", isHidden: true, state: '*'},
    {image: "insert_drive_file", text: "My Resume", isHidden: true, state: '*'}
  ];

  mouseEnter(l){
    l.isHidden = false;
    l.state = 'hovered';
  }

  mouseLeave(l){
    l.isHidden = true;
    l.state = '*';
  }
}
