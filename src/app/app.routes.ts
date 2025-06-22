import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { TaskCounterComponent } from './pages/task-counter/task-counter'; // jeśli już masz

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'counter', component: TaskCounterComponent }
];
