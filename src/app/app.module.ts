import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMCkC7nlDF-rprNriRGI7lRRxKy5_qwY4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
