import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TodoItemI} from "../view-foo/view-foo.component";
import {UserService} from "../../../user.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

    @Input('todo') todoItem!: TodoItemI;

    public subject$: Observable<string>;

    constructor(private _userService: UserService) {
        this.subject$ = this._userService.StringSubject$
    }

    public returnBool(): boolean {
        console.log('componentRendered')
        return true;
    }

    public changeInsideText(): void {
        this.todoItem.text = 'Changed from inside'
    }
}
