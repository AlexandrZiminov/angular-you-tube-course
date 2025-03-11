import {NgModule} from "@angular/core";
import {FormsComponent} from "./components/forms/forms.component";
import {FormsRoutingModule} from "./forms-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgClass} from "@angular/common";
import {RateComponent} from "./components/rate/rate.component";

@NgModule({
    imports: [FormsRoutingModule, ReactiveFormsModule, FormsModule, JsonPipe, NgClass],
    exports: [],
    declarations: [FormsComponent, RateComponent],
    providers: [],
})
export class FormsUiModule {
}
