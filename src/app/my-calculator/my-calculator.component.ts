import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf,
  ],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {
  public first: number = 0;
  public second: number = 0;

  public operation: string = '+';
  public operations: string[] = ['+', '-', '*', '/'];

  public result?: number;

  public calc() {
    switch (this.operation) {
      case "+":
        this.result = this.first + this.second;
        break;
      case "-":
        this.result = this.first - this.second;
        break;
      case "*":
        this.result = this.first * this.second;
        break;
      case "/":
        this.result = this.first / this.second;
        break;
    }
  }
}
