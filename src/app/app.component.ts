import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MyCalculatorComponent} from "./my-calculator/my-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MyCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-you-tube-course';
  tooltip = "Мой тултип";

  showMessage() {
    alert("Wow!");
  }
}
