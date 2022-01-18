import { Component, Input, OnInit } from '@angular/core';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { ToutouTask } from 'src/types';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.sass'],
})
export class ModifyTaskComponent implements OnInit {
  todoIcon = faCircle;
  doneIcon = faCheckCircle;
  @Input()
  oldTask!: ToutouTask;

  @Input()
  dismiss!: () => void;

  @Input()
  update!: (task: ToutouTask, newTask: ToutouTask) => void;

  task: ToutouTask = {
    selected: false,
    isDone: false,
    label: '',
  };

  toggleIsDone() {
    this.task.isDone = !this.task.isDone;
  }

  confirm = () => {
    if (this.task.label.trim().length === 0)
      this.task.label = this.oldTask.label;
    this.update(this.oldTask, this.task);
    this.dismiss();
  };

  constructor() {}

  ngOnInit(): void {}
}
