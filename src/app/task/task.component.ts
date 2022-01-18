import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { ToutouTask } from 'src/types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
})
export class TaskComponent implements OnInit {
  todoIcon = faCircle;
  doneIcon = faCheckCircle;

  @Input()
  task!: ToutouTask;

  @Input()
  appSelect!: (task: ToutouTask) => void;

  setDone = () => {
    this.task.isDone = true;
  };

  select = () => {
    this.appSelect(this.task);
  };

  constructor() {}

  ngOnInit(): void {}
}
