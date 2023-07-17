import { Component } from '@angular/core';
import Todo from '../Todo';
import dummyData from '../dummyData';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(public items: ItemsService) {}

  newItemTitle: string = '';
  newItemDesc: string = '';
  newItemDueDate: Date = new Date();
  //   items: Todo[] = dummyData;

  addItem() {
    if (
      this.newItemTitle === '' ||
      this.newItemDesc === '' ||
      this.newItemDueDate === null
    ) {
      alert('Please fill out all fields');
      return;
    }
    const newItem: Todo = {
      id: this.items.length(),
      title: this.newItemTitle,
      desc: this.newItemDesc,
      //   status: Date.now() > this.newItemDueDate.getTime() ? 'late' : 'pending',
      status: false,
      due_date: new Date(this.newItemDueDate),
    };

    console.log(newItem);
    this.items.addItem(newItem);
    this.newItemTitle = '';
    this.newItemDesc = '';
    this.newItemDueDate = new Date();
  }

  deleteItem(id: number) {
    this.items.removeItem(id);
  }
}
