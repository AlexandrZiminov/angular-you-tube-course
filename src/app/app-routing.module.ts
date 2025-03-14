import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyCalculatorComponent} from "./calculator/components/my-calculator/my-calculator.component";
import {MyEmptyPageComponent} from "./components/empty-route/empty-route.component";
import {isLoggedGuardFn} from "./is-logged-guard.fn";

const routes: Routes = [
    {
        path: 'calculator',
        component: MyCalculatorComponent,
        canDeactivate: [
            (component: MyCalculatorComponent) => !component.canLeave,
        ]
    },
    {
        path: '', redirectTo: 'calculator', pathMatch: 'full',

    },
    {
        path: 'object-list',
        loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule),

    },
    {
        path: 'directives',
        loadChildren: () => import('./directives/directives.module').then((m) => m.MyDirectivesModule),

    },
    {
        path: 'lifecycle',
        loadChildren: () => import('./lifecycle/life-cycle.module').then((m) => m.LifeCycleModule),

    },
    {
        path: 'requests',
        loadChildren: () => import('./requests/request-module.module').then((m) => m.RequestModule),
        canActivate: [isLoggedGuardFn],

    },
    {
        path: 'pipes',
        loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipeModule)
    },
    {
        path: 'forms',
        loadChildren: () => import('./forms/forms-ui.module').then((m) => m.FormsUiModule)
    },
    {
        path: 'decorators',
        loadChildren: () => import('./decorators/decorators.module').then((m) => m.DecoratorsModule)
    },
    {
        path: 'view-styles',
        loadChildren: () => import('./view-styles/view-styles.module').then((m) => m.ViewStylesModule)
    },
    {
        path: '**',
        component: MyEmptyPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
