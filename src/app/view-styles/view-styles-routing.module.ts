import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ViewFooComponent} from "./components/view-foo/view-foo.component";

const routes: Routes = [
    {
        path: '',
        component: ViewFooComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewStylesRoutingModule {
}
