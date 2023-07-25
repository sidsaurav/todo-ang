import { Component } from '@angular/core';
import Todo from '../Todo';
import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.css'],
})
export class AddTaskPageComponent {
  constructor(public router: Router, public items: ItemsService) {}

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
      id: this.items.nextItemID,
      title: this.newItemTitle,
      desc: this.newItemDesc,
      //   status: Date.now() > this.newItemDueDate.getTime() ? 'late' : 'pending',
      status: false,
      dueDate: new Date(this.newItemDueDate),
    };

    console.log(newItem);
    this.items.addItem(newItem);
    this.newItemTitle = '';
    this.newItemDesc = '';
    this.newItemDueDate = new Date();

    this.router.navigateByUrl('/home');
  }
}
