import { Component } from '@angular/core';
import { fadeUp, mainAnim, colorUp } from '../animations';

export interface Link {
  route: string,
  image: string,
  text: string,
  isHidden: boolean,
  state: any
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    colorUp,
    fadeUp,
    mainAnim
  ]
})

export class MainComponent {

  // Links of main page //
  links: Link[] = [
    {route: "/work", image: "code", text: "My Work", isHidden: true, state: '*'},
    {route: "/", image: "tag_faces", text: "About Me", isHidden: true, state: '*'},
    {route: "/resume", image: "insert_drive_file", text: "Resume+Skills", isHidden: true, state: '*'}
  ];

  mouseEnter(l){
    l.state = 'hovered';
  }

  mouseLeave(l){
    l.state = '*';
  }
}
