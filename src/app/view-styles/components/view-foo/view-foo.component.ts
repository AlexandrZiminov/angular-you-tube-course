import {ChangeDetectorRef, Component} from '@angular/core';
import {UserService} from "../../../user.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

export interface TodoItemI {
    text: string;
}

// 1st animation
const enterTransition = transition(':enter', [
    style({opacity: 0}),
    animate('1s ease-in', style({opacity: 1}))
])
const leaveTransition = transition(':leave', [
    style({opacity: 1}),
    animate('1s ease-out', style({opacity: 0}))
])
const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [leaveTransition]);


// 2nd animation
const fadeInOut = trigger('fadeInOut', [
    state('open', style({opacity: 1})),
    state('close', style({opacity: 0})),
    transition('open => close', [animate('1s ease-out')]),
    transition('close => open', [animate('1s ease-in')])
]);

@Component({
    selector: 'app-view-foo',
    templateUrl: './view-foo.component.html',
    styleUrl: './view-foo.component.scss',
    animations: [fadeIn, fadeOut, fadeInOut]
})
export class ViewFooComponent {

    public isShow: boolean = false;

    public todoArr: TodoItemI[] = [
        {
            text: 'Foo1'
        },
        {
            text: 'Foo2'
        },
        {
            text: 'Foo3'
        }
    ]


    constructor(private _userService: UserService, private _cdr: ChangeDetectorRef) {
    }

    public login(): void {
        this._userService.login();
        this._cdr.detectChanges();
    }

    public changeText(): void {
        this.todoArr[0] = {...this.todoArr[0], text: 'Foo changed'};
    }

    public changeStream(): void {
        this._userService.StringSubject$.next('Two')
    }

    public onAnimationStart(event: any): void {
        console.log('start', event);
    }

    public onAnimationDone(event: any): void {
        console.log('done', event);
    }
}
