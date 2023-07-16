import { Component } from '@angular/core';
import Todo from '../Todo';
import dummyData from '../dummyData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  newItemTitle: string = '';
  newItemDesc: string = '';
  newItemDueDate: Date = new Date();
  items: Todo[] = dummyData;

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
      id: this.items.length,
      title: this.newItemTitle,
      desc: this.newItemDesc,
      //   status: Date.now() > this.newItemDueDate.getTime() ? 'late' : 'pending',
      status: false,
      due_date: new Date(this.newItemDueDate),
    };

    console.log(newItem);
    this.items.push(newItem);
    this.newItemTitle = '';
    this.newItemDesc = '';
    this.newItemDueDate = new Date();
  }

  deleteItem(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.items = this.items.filter((item) => item.id !== id);
    }
  }
}
