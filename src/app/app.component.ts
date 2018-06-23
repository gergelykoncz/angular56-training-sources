import { Component } from '@angular/core';
import { IncrementService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private svc: IncrementService) {
    console.log(svc.counter);
  }
  title = 'app';
}
