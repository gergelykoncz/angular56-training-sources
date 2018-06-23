import { Component } from '@angular/core';

@Component({
  selector: 'app-my-if-demo',
  templateUrl: './ui.html',
  styleUrls: ['./style.css']
})
export class MyIfDemoComponent {
  public condition = false;

  public triggerCondition() {
    this.condition = !this.condition;
  }
}
