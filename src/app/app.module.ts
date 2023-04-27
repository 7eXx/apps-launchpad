import { Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LaunchpadComponent } from './launchpad/launchpad.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    LaunchpadComponent
  ],
  imports: [
    BrowserModule,
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(LaunchpadComponent, {injector: this.injector});
    customElements.define('fv-launchpad', webComponent);
  }
}
