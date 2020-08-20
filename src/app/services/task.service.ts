import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {
    this.tasks = JSON.parse( localStorage.getItem("tasks"));
  }

  

  public addTask(title: string, description: string,priority:string) {
    let date = Date.now();
    let completed:boolean = false;
    let color = "danger";
    if(priority == "High"){
      color = "danger"
    }
    if(priority == "Mid"){
      color = "warning"
    }
    if(priority == "Low"){
      color = "success"
    }
    let task: Task = {
      date,
      title,
      description,
      completed,
      priority,
      color
    };
    console.log(task);
    this.tasks.push(task);
    console.log(this.tasks.length);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  public delete(index:number){
    if(this.tasks.length > 1){
      
      localStorage.setItem("tasks",JSON.stringify(this.tasks.splice(index,1)));
    }else{

      this.tasks.pop();
      localStorage.setItem("tasks",JSON.stringify(this.tasks));

    }
  }

  public completeTask(index:number){
    this.tasks[index].completed = true;
    localStorage.setItem("tasks",JSON.stringify(this.tasks));

   }

   public save(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
   }
}

  export interface Task {
  date: number;
  title: string;
  description: string;
  completed:boolean;
  priority:string;
  color:string;
}
