import { Component, OnInit } from "@angular/core";
import { Task, TaskService } from "src/app/services/task.service";
import { FileChooser } from "@ionic-native/file-chooser/ngx";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  private tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
  
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.tasks;
  }

  reorderItems(event) {
    let draggedItem = this.tasks.splice(event.detail.from, 1)[0];
    this.tasks.splice(event.detail.to, 0, draggedItem);
    event.detail.complete();
    this.taskService.save();
  }

  public delete(index: number) {
    this.taskService.delete(index);
  }

  public completeTask(index: number) {
    this.taskService.completeTask(index);
  }
}
