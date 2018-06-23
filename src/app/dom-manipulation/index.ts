import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { ViewChildComponent } from './view-child-component';
import { TemplateViewComponent } from './template-view-component';
import { OutletComponent } from './outlet-component';

const routeConfig = [
  {
    path: '',
    component: ViewChildComponent
  },
  {
    path: 'template',
    component: TemplateViewComponent
  },
  {
    path: 'outlet',
    component: OutletComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routeConfig)],
  declarations: [ViewChildComponent, TemplateViewComponent, OutletComponent],
  exports: [],
  entryComponents: [TemplateViewComponent]
})
export default class DomManipulationModule {}
