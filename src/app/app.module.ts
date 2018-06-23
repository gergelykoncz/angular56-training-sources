import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StructuralModule } from './structural';
import { DomManipulationModule } from './dom-manipulation';
import { AttributeModule } from './attribute';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StructuralModule, DomManipulationModule, AttributeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
