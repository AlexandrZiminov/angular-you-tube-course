import {NgModule} from "@angular/core";
import {FormsComponent} from "./components/forms/forms.component";
import {FormsRoutingModule} from "./forms-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [FormsRoutingModule, ReactiveFormsModule],
    exports: [],
    declarations: [FormsComponent],
    providers: [],
})
export class FormsModule {
}
