import { Component } from '@angular/core';


@Component({
  selector: 'about',
  templateUrl: 'about.html'
})
export class AboutComponent {

  text: string;

  constructor() {
    console.log('Hello AboutComponent Component');
    this.text = 'Hello World';
  }

}
