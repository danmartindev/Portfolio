import { Component, HostListener, OnInit } from '@angular/core';
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

export class MainComponent implements OnInit{
  isSmall = false;

  // Links of main page //
  links: Link[] = [
    {route: "/work", image: "code", text: "My Work", isHidden: true, state: '*'},
    {route: "/about", image: "tag_faces", text: "About Me", isHidden: true, state: '*'},
    {route: "/resume", image: "insert_drive_file", text: "Resume+Skills", isHidden: true, state: '*'}
  ];

  ngOnInit() {
    if(window.innerWidth < 900){
      this.isSmall = true;
      this.setStates("visible")
    }
  }

  mouseEnter(l){
    l.state = 'hovered';
  }

  mouseLeave(l){
    if(this.isSmall){
      l.state = 'visible';
    } else {
      l.state = '*';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth < 900){
      this.isSmall = true;
      this.setStates("visible");
    } else {
      this.isSmall = false;
      this.setStates("*");
    }
  }

  setStates(state){
    for (let l of this.links) {
      l.state = state;
    }
  }

}
