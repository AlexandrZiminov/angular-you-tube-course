import {NgModule} from "@angular/core";
import {DecoratorsPageComponent} from "./components/decorators-page/decorators-page.component";
import {DecoratorsRoutingModule} from "./decorators-routing.module";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {ChildDecoratorComponent} from "./components/child-decorator/child-decorator.component";

@NgModule({
    imports: [DecoratorsRoutingModule, NgForOf, NgTemplateOutlet, NgIf],
    exports: [],
    declarations: [DecoratorsPageComponent, ChildDecoratorComponent],
    providers: [],
})
export class DecoratorsModule {
}
