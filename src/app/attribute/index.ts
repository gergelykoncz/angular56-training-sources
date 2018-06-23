import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { EmojiWrapperDirective } from './emoji-wrapper';
import { AttributeDemoComponent } from './demo-component';

const routeConfig = [
  {
    path: '',
    component: AttributeDemoComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routeConfig)],
  declarations: [EmojiWrapperDirective, AttributeDemoComponent],
  exports: []
})
export default class AttributeModule {}
