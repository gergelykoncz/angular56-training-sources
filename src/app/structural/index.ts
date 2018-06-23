import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { MyIfDirective } from './my-if-directive';
import { MyRepeatDirective } from './my-range-directive';

import { MyIfDemoComponent } from './demo-component';

@NgModule({
  imports: [SharedModule],
  declarations: [MyIfDirective, MyRepeatDirective, MyIfDemoComponent],
  exports: [MyIfDirective, MyRepeatDirective, MyIfDemoComponent]
})
export class StructuralModule {}
