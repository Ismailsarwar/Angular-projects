import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  allNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    this.allNumbers.push(firedNumber);
    // showing only even and odd
    // if (firedNumber % 2 === 0) {
    //   this.evenNumbers.push(firedNumber);
    // } else {
    //   this.oddNumbers.push(firedNumber);
    // }
  }

  onIntervalRemoved() {
    this.allNumbers = []
  }
}
