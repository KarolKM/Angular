import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent {
  task: string = '';
  constructor(public taskService: TaskService) {}

  addTask() {
    if (this.task.trim()) {
      this.taskService.addTask(this.task);
      this.task = '';
    }
  }
}
