import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MyCalculatorComponent} from './calculator/components/my-calculator/my-calculator.component';

const routes: Routes = [
  {path: '', component: AppComponent}, // Главная страница
  {path: 'calculator', component: MyCalculatorComponent}, // Страница калькулятора
  {path: '**', redirectTo: ''}, // Редирект на главную, если маршрут не найден
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Подключаем маршруты
  exports: [RouterModule], // Экспортируем RouterModule для использования в других модулях
})
export class AppRoutingModule {
}
