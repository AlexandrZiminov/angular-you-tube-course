import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [RouterOutlet, RouterLink, MyCalculatorComponent],
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
