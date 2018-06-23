import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyRepeat]'
})
export class MyRepeatDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input()
  set appMyRepeat(times: number) {
    this.viewContainer.clear();

    for (let index = 0; index < times; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: index
      });
    }
  }
}
