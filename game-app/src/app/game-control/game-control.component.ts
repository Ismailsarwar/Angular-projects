import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() intervalRemoved = new EventEmitter<[]>;
  interval;
  lastNumber = 0;

  constructor() {}

  ngOnInit() {}

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 500)
  }

  onGamePause() {
    clearInterval(this.interval);
  }

  onGameReset() {
    this.intervalFired.emit(this.lastNumber = 0);
    clearInterval(this.interval);
    this.intervalRemoved.emit([])
  }
}
