import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildComponent } from './view-child-component';
import { TemplateViewComponent } from './template-view-component';
import { OutletComponent } from './outlet-component';

@NgModule({
  imports: [CommonModule],
  declarations: [ViewChildComponent, TemplateViewComponent, OutletComponent],
  exports: [ViewChildComponent, TemplateViewComponent, OutletComponent],
  entryComponents: [TemplateViewComponent]
})
export class DomManipulationModule {}
