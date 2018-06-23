import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core';

import { AppComponent } from './app.component';

const routeConfig = [
  {
    path: 'attribute',
    loadChildren: './attribute/index'
  },
  {
    path: 'dom',
    loadChildren: './dom-manipulation/index'
  },
  {
    path: '',
    loadChildren: './structural/index'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(routeConfig), CoreModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
