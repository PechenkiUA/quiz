import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxQuizModule } from 'ngx-quiz';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxQuizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
