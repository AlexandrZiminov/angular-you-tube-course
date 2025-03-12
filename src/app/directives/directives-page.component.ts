import {Component} from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives-page.component.html',
    styleUrl: './directives-page.component.scss',
})
export class DirectivesPageComponent {
    public isShow: boolean = true;

    public elementStyle: any = {
        color: 'red',
        opacity: 1,
    };


}
