import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'my-object-list',
    templateUrl: './object-list.component.html',
    styleUrl: './object-list.component.scss',
})
export class MyObjectListComponent {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    public myObjects = myObjects;

    public redirectTo(id: number): void {
        this.router.navigate([`${id}`], {relativeTo: this.route});
    }
}

export const myObjects: MyObject[] = [
    {
        title: "perviy",
        content: "asdad",
        id: 1

    },
    {
        title: "vtoroy",
        content: "asdad",
        id: 2
    },
    {
        title: "tretiy",
        content: "asdad",
        id: 3
    },
    {
        title: "chetvertiy",
        content: "asdad",
        id: 4
    },
    {
        title: "piatiy",
        content: "asdad",
        id: 5
    },
]

export interface MyObject {
    title: string;
    content: string;
    id: number;
}
