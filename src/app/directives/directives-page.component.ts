import {Component} from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives-page.component.html',
    styleUrl: './directives-page.component.scss',
})
export class DirectivesPageComponent {
    public colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple'];
    public isShow: boolean = true;
    public currentColor = this.colors[0];

    public elementStyle: any = {
        color: 'red',
        opacity: 1,
    };


}
