import {Component} from '@angular/core';

@Component({
    selector: 'app-pipes1',
    templateUrl: './pipes.component.html',
    styleUrl: './pipes.component.scss'
})
export class PipesComponent {

    public name: string = "Alexandr ZIminov";
    public surname: string = "ZIMinov";

    public date = new Date().toDateString();

}
