import { Component } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToutouTask } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'toutoulist';

  plusIcon = faPlus;
  circleIcon = faCircle;

  tasks: ToutouTask[] = [];

  emptyTask: ToutouTask = {
    label: 'Ajoutez une Tache',
    isDone: this.tasks.length > 0,
    selected: false,
  };

  selectedTasks: ToutouTask[] = [];

  modifiedTask?: ToutouTask = undefined;

  inputData!: string;
  add = () => {
    if (!this.inputData.trim()) return;
    this.tasks.push({
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
      this.tasks.splice(this.tasks.indexOf(task), 1);
    });
    this.selectedTasks = [];
  };

  modify = () => {
    this.modifiedTask = this.selectedTasks[0];
  };

  update = (task: ToutouTask, newTask: ToutouTask) => {
    console.log(this.tasks);
    this.tasks[this.tasks.indexOf(task)] = newTask;
  };

  cancel = () => {
    this.selectedTasks.forEach((task) => {
      task.selected = false;
    });
    this.selectedTasks = [];
    this.modifiedTask = undefined;
  };
}
