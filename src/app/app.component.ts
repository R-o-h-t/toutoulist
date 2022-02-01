import { Component } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ToutouTask } from 'src/types';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'toutoulist';

  plusIcon = faPlus;
  circleIcon = faCircle;

  _tasks: ToutouTask[] = [];

  emptyTask: ToutouTask = {
    id: 0,
    label: 'Ajoutez une Tache',
    isDone: this.tasks.length > 0,
    selected: false,
  };

  selectedTasks: ToutouTask[] = [];

  modifiedTask?: ToutouTask = undefined;

  inputData!: string;

  private taskSubscription?: Subscription;

  get tasks() {
    return this._tasks;
  }

  set tasks(tasks: ToutouTask[]) {
    this.taskService.setTasks(tasks);
  }

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskSubscription = this.taskService
      .getTasks()
      .subscribe((tasks: ToutouTask[]) => {
        this._tasks = tasks;
      });
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
  add = () => {
    if (!this.inputData.trim()) return;
    this.taskService.addTask({
      id: Math.ceil(Math.random() * 10000000),
      label: this.inputData.trim(),
      isDone: false,
      selected: false,
    });
    this.inputData = '';
  };

  select = (task: ToutouTask) => {
    if (task === this.emptyTask) return;
    if (task.selected) {
      this.selectedTasks.splice(this.selectedTasks.indexOf(task), 1);
    } else {
      this.selectedTasks.push(task);
    }
    task.selected = !task.selected;
  };

  remove = () => {
    this.selectedTasks.forEach((task) => {
      this.taskService.deleteTask(task.id);
    });
    this.selectedTasks = [];
  };

  modify = () => {
    this.modifiedTask = this.selectedTasks[0];
  };

  cancel = () => {
    this.selectedTasks.forEach((task) => {
      task.selected = false;
    });
    this.selectedTasks = [];
    this.modifiedTask = undefined;
  };
}
