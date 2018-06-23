declare var require: any;

import * as $ from 'jquery';
require('emojionearea');

import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiWrapperDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    $(this.element.nativeElement).emojioneArea({
      autocomplete: false
    });
  }
}
