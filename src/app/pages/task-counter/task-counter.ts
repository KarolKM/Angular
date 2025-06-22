import { Component } from '@angular/core';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-counter',
  standalone: true,
  imports: [],
  template: `
    <h1>Licznik zadań</h1>
    <p>Wszystkich zadań: {{ totalTasks }}</p>
    <p>Open: {{ openTasks }}</p>
    <p>In Progress: {{ inProgressTasks }}</p>
    <p>Done: {{ doneTasks }}</p>
  `,
  styles: []
})
export class TaskCounterComponent {
  constructor(private taskService: TaskService) {}

  get totalTasks() {
    return this.taskService.tasks.length;
  }

  get openTasks() {
    return this.taskService.tasks.filter(t => t.status === 'Open').length;
  }

  get inProgressTasks() {
    return this.taskService.tasks.filter(t => t.status === 'In Progress').length;
  }

  get doneTasks() {
    return this.taskService.tasks.filter(t => t.status === 'Done').length;
  }
}
