import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    public counter = signal<number>(0);

    public doubleCounter = computed(() => this.counter() * 2);

    constructor() {
        effect(() => {
            console.log(`signal triggered ${this.counter()}`);
        });
    }

    public plus(): void {
        this.counter.update(value => value + 1);
    }
}
