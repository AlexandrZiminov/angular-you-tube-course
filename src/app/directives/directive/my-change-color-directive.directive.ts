import {AfterViewInit, Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[myChangeColor]'
})

export class MyChangeColorDirectiveDirective implements AfterViewInit {

    @HostBinding('style.color') color: string = 'purple';

    @HostBinding('style.background') background: string = 'transparent';

    @HostListener('document:click', ['$event']) handleClick(event: PointerEvent): void {
        console.log('click', event);
    }

    @HostListener('mouseenter', ['$event']) handleEnter(): void {
        this.background = this.getChangeColor()
    }

    @HostListener('mouseleave', ['$event']) handleLeave(): void {
        this.background = 'transparent';
    }

    constructor() {
    }

    ngAfterViewInit() {
        setInterval(() => {
            this.color = this.getChangeColor()
        }, 2_500)
    }

    private getChangeColor(): string {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

}
