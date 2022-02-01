import { Component, Input, OnInit } from '@angular/core';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { ToutouTask } from 'src/types';
import { TaskService } from '../task.service';

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

  task: ToutouTask;

  toggleIsDone() {
    this.task.isDone = !this.task.isDone;
  }

  confirm = () => {
    if (this.task.label.trim().length === 0)
      this.task.label = this.oldTask.label;
    this.task.id = this.oldTask.id;
    this.taskService.updateTask(this.oldTask.id, this.task);
    this.dismiss();
  };

  constructor(private taskService: TaskService) {
    this.task = {
      id: 0,
      selected: false,
      isDone: false,
      label: '',
    };
  }

  ngOnInit(): void {}
}
