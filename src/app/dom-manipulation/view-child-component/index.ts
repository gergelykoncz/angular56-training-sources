import { Component, ViewChild, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './ui.html'
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('idRef') public child: ElementRef;
  public helpText: string;

  ngAfterViewInit() {
    // CDR fun!
    setTimeout(() => {
      this.helpText = `ViewChild content is "${this.child.nativeElement.textContent}"`;
    }, 0);
  }
}
