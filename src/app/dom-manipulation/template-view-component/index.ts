import { Component, ViewChild, TemplateRef, ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-template-view',
  templateUrl: './ui.html'
})
export class TemplateViewComponent {
  @ViewChild('templateId') public template: TemplateRef<any>;
  public helpText: string;

  constructor(
    private viewContainer: ViewContainerRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver
  ) {}

  public createEmbeddedView() {
    const embeddedViewRef = this.template.createEmbeddedView(null);
    // Same as const embeddedViewRef = this.viewContainer.createEmbeddedView(this.template);
    this.viewContainer.insert(embeddedViewRef);
  }

  public createHostView() {
    const factory = this.resolver.resolveComponentFactory(TemplateViewComponent);
    const component = factory.create(this.injector);
    const hostView = component.hostView;
    this.viewContainer.insert(hostView);
  }
}
