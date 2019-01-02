import { Component } from '@angular/core';

@Component({
  selector: 'lsl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Letslearn';
  points = 1;

  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  }
}