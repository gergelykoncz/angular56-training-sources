import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyIfDirective } from './my-if-directive';
import { MyRepeatDirective } from './my-range-directive';

import { MyIfDemoComponent } from './demo-component';

@NgModule({
  imports: [CommonModule],
  declarations: [MyIfDirective, MyRepeatDirective, MyIfDemoComponent],
  exports: [MyIfDirective, MyRepeatDirective, MyIfDemoComponent]
})
export class StructuralModule {}
