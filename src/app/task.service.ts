import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToutouTask } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: ToutouTask[] = [];
  private tasks$ = new BehaviorSubject<ToutouTask[]>(this.tasks);
  getTasks() {
    return this.tasks$.asObservable();
  }

  setTasks(tasks: ToutouTask[]) {
    this.tasks$.next(tasks);
  }

  deleteTask(taskId: number): void {
    const index = this.tasks.findIndex((x) => x.id === taskId);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  updateTask(taskId: number, newTask: ToutouTask): void {
    const index = this.tasks.findIndex((x) => x.id === taskId);
    this.tasks[index] = newTask;
  }

  addTask(newTask: ToutouTask): void {
    this.tasks.push(newTask);
  }
}
