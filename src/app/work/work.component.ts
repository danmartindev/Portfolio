import { MyWorkService } from './../Services/my-work.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { dropDown, mainAnim, collapser, rotate } from '../animations';
import { Entry } from '../entry';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    collapser,
    dropDown,
    mainAnim,
    rotate
  ]
})

export class WorkComponent implements OnInit {

  expEntries: Entry[] = [];
  projEntries: Entry[] = [];
  
  constructor(private entryService: MyWorkService) { }

  ngOnInit() {
    this.getEntries();
  }

  getEntries(){
    this.expEntries = this.entryService.getExpEntries();
    this.projEntries = this.entryService.getProjEntries();

  }

  collapse(entry){
    console.log("clciked");
    if(entry.state == "*"){
      entry.state = "expanded";
    } else {
      entry.state = "*";
    }
  }
  
}
