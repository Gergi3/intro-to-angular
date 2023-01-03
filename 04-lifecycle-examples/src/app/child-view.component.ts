import { Component } from '@angular/core';

@Component({
  selector: 'app-child-view',
  template: `
    <label for="hero-name">Hero name: </label>
    <input type="text" id="hero-name" [(ngModel)]="hero">
  `
})
export class ChildViewComponent {
  hero = 'Magneta';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/