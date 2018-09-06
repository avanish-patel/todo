import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todo: string = "";

  todoArray = [];

  addTodo(todo) {
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
