import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav style="margin-bottom: 20px;">
      <a routerLink="/" style="margin-right: 10px;">Strona Główna</a>
      <a routerLink="/about" style="margin-right: 10px;">O Aplikacji</a>
      <a routerLink="/counter">Licznik zadań</a>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
