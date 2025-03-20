import {Component, model, signal, Signal} from '@angular/core';

@Component({
    selector: 'app-app-child',
    templateUrl: './app-child.component.html',
    styleUrl: './app-child.component.scss'
})
export class AppChildComponent {

    value = model(0);

    public increment(): void {
        this.value.update(oldValue => oldValue + 1);
    }

    public shippingAddress: Signal<string[]> = this.getShippingAddresses();

    public selectedOption = signal<string>(this.shippingAddress()[0])

    // public selectedOption =

    public changeShippingAddress(index: number): void {
        this.selectedOption.set(this.shippingAddress()[index]);
    }

    private getShippingAddresses(): Signal<string[]> {
        return signal(['New-York', 'London', 'Amsterdam', 'Paris']);
    }
}
