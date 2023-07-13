import { Component } from '@angular/core';
import Todo from "./Todo"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'To Do Angular <3'
  newItemData:string = ""
  newItemDueDate:Date = new Date()
  items:Todo[] = []
  
  addItem() {

    const newItem:Todo = {
        id: this.items.length,
        data: this.newItemData,
        status: "pending",
        due_date: this.newItemDueDate
    }

    this.items.push(newItem)
    this.newItemData = ""
  }
  
  deleteItem(id:number) {
    this.items = this.items.filter(item => item.id !== id)
  }
}
