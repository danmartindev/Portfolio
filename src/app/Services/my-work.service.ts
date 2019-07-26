import { Entry, ProjEntry } from './../entry';
import { expEntries, projEntries } from './../my-entries';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyWorkService {

  constructor() { }

  getExpEntries(): Entry[] {
    return expEntries;
  }

  getProjEntries(): ProjEntry[] {
    return projEntries;
  }
}
