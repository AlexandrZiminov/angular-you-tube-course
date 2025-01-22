import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MyCalculatorModule} from "./calculator/my-calculator.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyCalculatorModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
