import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { EmojiWrapperDirective } from './emoji-wrapper';
import { AttributeDemoComponent } from './demo-component';

@NgModule({
  imports: [SharedModule],
  declarations: [EmojiWrapperDirective, AttributeDemoComponent],
  exports: [EmojiWrapperDirective, AttributeDemoComponent]
})
export class AttributeModule {}
