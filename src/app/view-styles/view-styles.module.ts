import {NgModule} from '@angular/core';
import {ViewBarComponent} from "./components/view-bar/view-bar.component";
import {ViewFooComponent} from "./components/view-foo/view-foo.component";
import {ViewStylesRoutingModule} from "./view-styles-routing.module";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";
import {AsyncPipe} from "@angular/common";

@NgModule({
    imports: [ViewStylesRoutingModule, AsyncPipe],
    exports: [],
    declarations: [ViewBarComponent, ViewFooComponent, TodoItemComponent],
    providers: [],
})
export class ViewStylesModule {
}
