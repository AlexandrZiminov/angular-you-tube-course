import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirectivesPageComponent} from "./directives-page.component";

const routes: Routes = [
    {
        path: '',
        component: DirectivesPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DirectivesRoutingModule {
}
