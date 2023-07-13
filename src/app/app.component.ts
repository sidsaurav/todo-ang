import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angtut'
  name = 'siddharth saurav'
  newItem = ""
  items = ["Angular", "React", "Vue"]
  addItem() {
    this.items.push(this.newItem)
    this.newItem = ""
  }
}
