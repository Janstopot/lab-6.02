import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  name:string;
  postponed: boolean
  completed:boolean

  todoList: Todo[]


  constructor() {
    this.todoList = [],
    this.name = "",
    this.postponed = false,
    this.completed = false
   }

  ngOnInit(): void {
    this.todoList.push(new Todo("TLKAJSD", false, false))
  }

  createToDo(){
    this.todoList.push(new Todo(this.name, this.postponed, this.completed))
    this.name = ""
  }

  postponeToDo(i : number){
    this.todoList[i].postponed = true;
    console.log(this.todoList[i].postponed)
  }



  completeToDo(i: number){
    this.todoList[i].completed = true
  }

  clearCompleted(){
    for(let i = 0; i < this.todoList.length; i++){
      if(this.todoList[i].completed === true) this.todoList.splice(i, 1)
    }
  }

  restoreToDos(){
    for(let i = 0; i < this.todoList.length; i++){
      if(this.todoList[i].postponed === true) this.todoList[i].postponed = false
    }
  }

  getClass(i : number){
    if(this.todoList[i].completed) return "completed"
    if(this.todoList[i].postponed) return "postponed"
    else return "normal"
  }

}
