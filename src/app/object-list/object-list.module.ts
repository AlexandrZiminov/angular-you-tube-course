import {NgModule} from '@angular/core';
import {MyObjectListComponent} from "./components/list/object-list.component";
import {MyObjectItemComponent} from "./components/item/object-item.component";
import {CommonModule} from "@angular/common";
import {MyObjectListRoutingModule} from "./object-list-routing.module";


@NgModule({
    imports: [CommonModule, MyObjectListRoutingModule],
    exports: [MyObjectListComponent, MyObjectItemComponent],
    declarations: [MyObjectListComponent, MyObjectItemComponent],
    providers: [],
})
export class MyObjectListModule {
}
