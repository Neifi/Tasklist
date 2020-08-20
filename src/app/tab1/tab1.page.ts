import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private todoItem:string;
  private tasks:Task[] =[];
  private todo:FormGroup;

  constructor(private formBuilder:FormBuilder,private taskService:TaskService) {
    this.todo = this.formBuilder.group({
      title:['',Validators.required],
      description:[' ',Validators.required],
      priority:['Low']
    });
    
    
    
  }
  
  public add(){
    let title = this.todo.value.title;
    let description = this.todo.value.description;
    let priority = this.todo.value.priority;
    
    this.taskService.addTask(title,description,priority);
  }




}
