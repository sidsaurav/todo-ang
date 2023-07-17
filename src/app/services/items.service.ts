import { Injectable } from '@angular/core';
import Todo from '../Todo';
import dummyData from '../dummyData';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  public itemsArr: Todo[] = [];
  constructor() {
    this.itemsArr = dummyData;
  }

  addItem(item: Todo) {
    this.itemsArr.push(item);
  }

  removeItem(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.itemsArr = this.itemsArr.filter((item) => item.id !== id);
    }
  }

  getItembyId(id: number) {
    return this.itemsArr.find((item) => item.id === id);
  }

  length() {
    return this.itemsArr.length;
  }

  updateItem(id: number, title: string, desc: string, due_date: Date) {
    this.itemsArr[id].title = title;
    this.itemsArr[id].desc = desc;
    this.itemsArr[id].due_date = due_date;
  }
}
