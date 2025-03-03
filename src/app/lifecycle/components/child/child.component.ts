import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: 'child.component.html',
    styleUrl: 'child.component.scss',
})
export class ChildComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges {

    @Input() title?: string;

    @Output() eventChange = new EventEmitter<string>();

    public tempTitle?: string;

    constructor() {
        console.log('%cChildComponent constructor', 'color:green');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        console.log('%cChildComponent ngOnChanges', 'color:red');
    }

    ngOnInit(): void {
        console.log('%cChildComponent ngOnInit', 'color:green');
        this.tempTitle = this.title;
    }

    ngDoCheck(): void {
        console.log('%cChildComponent ngDoCheck', 'color:green');
    }

    ngAfterContentInit(): void {
        console.log('%cChildComponent ngAfterContentInit', 'color:green');
    }

    ngAfterContentChecked(): void {
        console.log('%cChildComponent ngAfterContentChecked', 'color:green');
    }

    ngAfterViewInit() {
        console.log('%cChildComponent ngAfterViewInit', 'color:green');
    }

    ngAfterViewChecked(): void {
        console.log('%cChildComponent ngAfterViewChecked', 'color:green');
    }

    ngOnDestroy() {
        console.log('%cChildComponent ngOnDestroy', 'color:green');
    }

    public clickHandler(): void {
        this.tempTitle = "i am mutated";
        this.eventChange.emit(this.tempTitle);
    }
}
