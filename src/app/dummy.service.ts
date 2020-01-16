import { Injectable, SkipSelf, Optional } from '@angular/core';

@Injectable()
export class DummyService {

  createDateTime = new Date();

  constructor(@Optional() @SkipSelf() parentDummy: DummyService) {
    if (parentDummy){
      console.log(`🍌🍌🍌 Dummy (${this.createDateTime.getTime()}) created with parent(${parentDummy.createDateTime.getTime()})`);
    } else {
      console.log(`🐌🐌🐌 Dummy (${this.createDateTime.getTime()}) created without parent`);
    }
  }

  say(name){
    console.log(`🍅🍅🍅 Dummy (${this.createDateTime.getTime()}) injected into ${name}`);
  }
}
