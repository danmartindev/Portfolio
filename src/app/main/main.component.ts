import { Component } from '@angular/core';

export interface Link {
  image: string,
  text: string,
  isHidden: boolean
}

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  // Links of main page //
  links: Link[] = [
    {image: "memory", text: "My Work", isHidden: true},
    {image: "tag_faces", text: "About Me", isHidden: true},
    {image: "insert_drive_file", text: "My Resume", isHidden: true}
  ];

  mouseEnter(lText){
    lText.isHidden = false;
  }

  mouseLeave(lText){
    lText.isHidden = true;
  }

}
