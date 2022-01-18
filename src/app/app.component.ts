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
    label: 'Ajouter une Tache',
    isDone: this.tasks.length > 0,
    selected: false,
  };

  selectedTasks: ToutouTask[] = [];

  inputData!: string;
  add = () => {
    this.tasks.push({
      label: this.inputData,
      isDone: false,
      selected: false,
    });
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
    console.log(this.selectedTasks[0]);
  };

  cancel = () => {
    this.selectedTasks.forEach((task) => {
      task.selected = false;
    });
    this.selectedTasks = [];
  };
}
