import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MyCalculatorModule} from "./calculator/my-calculator.module";
import {MyNavigationComponent} from "./components/navigation/navigation.component";
import {MyEmptyPageComponent} from "./components/empty-route/empty-route.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [AppComponent, MyNavigationComponent, MyEmptyPageComponent],
    imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule, MyCalculatorModule],
    bootstrap: [AppComponent],
})
export class AppModule {
}
