import { Component } from '@angular/core';
import { IncrementService } from '../../core';

@Component({
  selector: 'app-attribute-demo',
  templateUrl: './ui.html'
})
export class AttributeDemoComponent {
  constructor(private service: IncrementService) {
    console.log(service.counter);
  }
}
