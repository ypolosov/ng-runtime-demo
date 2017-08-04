import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ErrorHandlerModule} from './error-handler';
import {RuntimeModule} from './runtime';

@NgModule({
              imports: [
                  BrowserModule,
                  RuntimeModule.forRoot(),
                  ErrorHandlerModule.forRoot()
              ],
              declarations: [AppComponent],
              bootstrap: [AppComponent]
          })
export class AppModule {
}
