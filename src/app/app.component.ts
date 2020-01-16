import { Component } from '@angular/core';
import { DummyService } from './dummy.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [DummyService]
})
export class AppComponent {
  title = 'Lazy loading feature modules';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/