import { Component, OnInit, enableProdMode } from '@angular/core';
import { dropDown, mainAnim, collapser } from '../animations';


export interface Entry{
  title: String,
  company: String,
  date: String,
  content: String,
  state: String,
}


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

  expEntries: Entry[] = [
    {title: "iOS Developer 1", company: "Some Company", date: "june - july", 
    content: `1111111This co-op had me working as an iOS developer on an NIH Grant project between RIT and the University of Rochester. 
    The goal of the project was to detect atrial fibrillation, irregular heart rhythms, through a video feed. 
    <br>
    <br>
    I worked as the iOS developer on a team including myself, a data analyst, and an android developer. 
    The end product of my time at this position was an app that on the front-end had a number of built in browser “apps” that 
    the user could browse, while in the background, videos were periodically recorded through the front facing camera. 
    These videos would have the RGB data of each frame extracted, the data sent to a firebase database, 
    and then the video would be deleted for the user's privacy.`, state:"*"},
    {title: "iOS Developer 2", company: "Some Company", date: "june - july", 
    content: `2222222This co-op had me working as an iOS developer on an NIH Grant project between RIT and the University of Rochester. 
    The goal of the project was to detect atrial fibrillation, irregular heart rhythms, through a video feed. 
    <br>
    <br>
    I worked as the iOS developer on a team including myself, a data analyst, and an android developer. 
    The end product of my time at this position was an app that on the front-end had a number of built in browser “apps” that 
    the user could browse, while in the background, videos were periodically recorded through the front facing camera. 
    These videos would have the RGB data of each frame extracted, the data sent to a firebase database, 
    and then the video would be deleted for the user's privacy.`, state:"*"},
    {title: "iOS Developer 3", company: "Some Company", date: "june - july", 
    content: `333333This co-op had me working as an iOS developer on an NIH Grant project between RIT and the University of Rochester. 
    The goal of the project was to detect atrial fibrillation, irregular heart rhythms, through a video feed. 
    <br>
    <br>
    I worked as the iOS developer on a team including myself, a data analyst, and an android developer. 
    The end product of my time at this position was an app that on the front-end had a number of built in browser “apps” that 
    the user could browse, while in the background, videos were periodically recorded through the front facing camera. 
    These videos would have the RGB data of each frame extracted, the data sent to a firebase database, 
    and then the video would be deleted for the user's privacy.`, state:"*"},

  ]
  
  ////// FIX FLEXBOX EXPANDING EQUALLY FOR EACH ENTRY

  cState="*"
  constructor() { }

  ngOnInit() {
  }

  collapse(entry){
    console.log("clicked");
    
    console.log(entry.state);
    if(entry.state == "*"){
      entry.state = "expanded";
    } else {
      entry.state = "*";
    }

    for(let e of this.expEntries){
      console.log(e.title + ": " + e.state);
    }
  }
  
}
