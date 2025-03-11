import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

export interface RateOptions {
    rates: number,
    text: string;
}

@Component({
    selector: 'app-rate',
    templateUrl: './rate.component.html',
    styleUrl: './rate.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: RateComponent,
        }
    ]
})
export class RateComponent implements ControlValueAccessor, OnInit {

    @Input() options!: RateOptions;

    public currentRate!: number;

    public ratesArr: number[] = [];

    public disabled: boolean = false;

    public touched: boolean = false;

    onChange = (currentRate: number) => {
    };

    onTouched = () => {
    };

    ngOnInit() {
        this.fillRatesArr()
    }

    public onRate(index: number) {
        this.markAsTouched();
        if (!this.disabled) {
            this.currentRate = index;
            this.onChange(this.currentRate);
        }
    }

    // ControlValueAccessor methods start
    public writeValue(rate: number) {
        this.currentRate = rate;
    }

    public registerOnChange(fn: any) {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    private fillRatesArr(): void {
        let condition = true;
        let count = 1;
        while (condition) {
            this.ratesArr.push(count)
            if (count == this.options.rates) {
                condition = false;
            } else {
                count++;
            }
        }
    }

    public setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    public markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    // ControlValueAccessor methods end
}
