import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // dodaj
import { TaskService, Task } from '../../services/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // dodaj FormsModule
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {
  constructor(public taskService: TaskService) {}

  changeStatus(index: number, status: Task['status']) {
    this.taskService.updateStatus(index, status);
  }

  deleteTask(index: number) {
    const task = this.taskService.tasks[index];
    const confirmed = confirm(`Czy na pewno chcesz usunąć zadanie: "${task.name}"?`);
    if (confirmed) {
      this.taskService.deleteTask(index);
    }
  }

  filterText: string = '';
  filterStatus: string = 'all';

  get filteredTasks() {
    return this.taskService.tasks.filter(task =>
      (this.filterStatus === 'all' || task.status === this.filterStatus) &&
      task.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }



}
