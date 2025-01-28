import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MyCalculatorModule} from "./calculator/my-calculator.module";
import {MyNavigationComponent} from "./components/navigation/navigation.component";
import {MyEmptyPageComponent} from "./components/empty-route/empty-route.component";

@NgModule({
    declarations: [AppComponent, MyNavigationComponent, MyEmptyPageComponent],
    imports: [BrowserModule, AppRoutingModule, MyCalculatorModule],
    bootstrap: [AppComponent],
})
export class AppModule {
}
