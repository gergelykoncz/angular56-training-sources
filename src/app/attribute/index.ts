import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojiWrapperDirective } from './emoji-wrapper';
import { AttributeDemoComponent } from './demo-component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmojiWrapperDirective, AttributeDemoComponent],
  exports: [EmojiWrapperDirective, AttributeDemoComponent]
})
export class AttributeModule {}
