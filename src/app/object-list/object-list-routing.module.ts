import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyObjectListComponent} from "./components/list/object-list.component";
import {MyObjectItemComponent} from "./components/item/object-item.component";

const routes: Routes = [
    {
        path: '',
        component: MyObjectListComponent,
    },
    {
        path: ':id',
        component: MyObjectItemComponent,

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyObjectListRoutingModule {
}
