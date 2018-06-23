import { Component } from '@angular/core';
import { TemplateViewComponent } from '../template-view-component';

@Component({
  selector: 'app-outlet-component',
  templateUrl: './ui.html'
})
export class OutletComponent {
  TemplateViewComponent = TemplateViewComponent;
}
