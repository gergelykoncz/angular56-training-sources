import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { MyIfDirective } from './my-if-directive';
import { MyRepeatDirective } from './my-range-directive';

import { MyIfDemoComponent } from './demo-component';

const routeConfig = [
  {
    path: '',
    component: MyIfDemoComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routeConfig)],
  declarations: [MyIfDirective, MyRepeatDirective, MyIfDemoComponent],
  exports: [MyIfDirective, MyRepeatDirective, MyIfDemoComponent]
})
export default class StructuralModule {}
