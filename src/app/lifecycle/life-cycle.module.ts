import {NgModule} from '@angular/core';
import {ParentComponent} from "./components/parent/parent.component";
import {ChildComponent} from "./components/child/child.component";
import {LifeCycleRoutingModule} from "./life-cycle-routing.module";

@NgModule({
    imports: [LifeCycleRoutingModule],
    exports: [],
    declarations: [ParentComponent, ChildComponent],
    providers: [],
})
export class LifeCycleModule {
}
