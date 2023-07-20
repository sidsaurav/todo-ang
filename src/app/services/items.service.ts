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
    this.itemsArr.splice(this.itemsArr.length, 0, item);
  }

  removeItem() {
    this.itemsArr = this.itemsArr.filter(
      (item) => item.id !== this.itemIdToBeDeleted
    );
  }

  getItembyId(id: number) {
    return this.itemsArr.find((item) => item.id === id);
  }

  length() {
    return this.itemsArr.length;
  }

  updateItem(itemToBeUpdated: any) {
    const { itemId, newTitle, newDesc, newDueDate } = itemToBeUpdated;
    this.itemsArr[itemId].title = newTitle;
    this.itemsArr[itemId].desc = newDesc;
    this.itemsArr[itemId].due_date = newDueDate;
  }

  itemIdToBeDeleted: number = -1;

  updateItemIdToBeDeleted(id: number) {
    this.itemIdToBeDeleted = id;
  }
}
