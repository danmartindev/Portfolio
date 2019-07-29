import { MyWorkService } from './../Services/my-work.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { mainAnim, collapser, rotate } from '../animations';
import { Entry, ProjEntry } from '../entry';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    collapser,
    mainAnim,
    rotate,
  ]
})

export class WorkComponent implements OnInit {

  expEntries: Entry[] = [];
  projEntries: ProjEntry[] = [];
  
  constructor(private entryService: MyWorkService) { }

  ngOnInit() {
    this.getEntries();
  }

  getEntries(){
    this.expEntries = this.entryService.getExpEntries();
    this.projEntries = this.entryService.getProjEntries();

  }

  collapse(entry){
    if(entry.state == "*"){
      entry.state = "expanded";
    } else {
      entry.state = "*";
    }
  }
  
}
