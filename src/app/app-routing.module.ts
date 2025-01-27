import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Подключаем маршруты
  exports: [RouterModule], // Экспортируем RouterModule для использования в других модулях
})
export class AppRoutingModule {
}
