import { Component } from '@angular/core';
import { TaskFormComponent } from '../../components/task-form/task-form';
import { TaskListComponent } from '../../components/task-list/task-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}
