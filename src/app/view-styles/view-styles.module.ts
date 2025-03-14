import {NgModule} from '@angular/core';
import {ViewBarComponent} from "./components/view-bar/view-bar.component";
import {ViewFooComponent} from "./components/view-foo/view-foo.component";
import {ViewStylesRoutingModule} from "./view-styles-routing.module";

@NgModule({
    imports: [ViewStylesRoutingModule],
    exports: [],
    declarations: [ViewBarComponent, ViewFooComponent],
    providers: [],
})
export class ViewStylesModule {
}
