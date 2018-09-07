import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todo: string = null;

  todoArray = [];

  today = Date.now();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  addTodo(todo) {
    if (todo === null) {
      return;
    }
    this.todoArray.push(todo);
    this.todo = null;
    // console.log(this.todo);
    // console.log(this.todoArray);
  }

  deleteTodo(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo === this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
}
