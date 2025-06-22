import { Injectable } from '@angular/core';

export interface Task {
  name: string;
  status: 'Open' | 'In Progress' | 'Done';
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private saveToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadFromStorage() {
    const data = localStorage.getItem('tasks');
    if (data) {
      const parsed = JSON.parse(data);
      // Parsujemy daty, które są zapisane jako stringi
      this.tasks = parsed.map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt)
      }));
    }
  }

  addTask(name: string) {
    if (name.trim()) {
      this.tasks.push({
        name,
        status: 'Open',
        createdAt: new Date()
      });
      this.saveToStorage();
    }
  }

  updateStatus(index: number, newStatus: Task['status']) {
    this.tasks[index].status = newStatus;
    this.saveToStorage();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveToStorage();
  }
}
