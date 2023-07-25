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
  nextItemID = 100;
  addItem(item: Todo) {
    this.itemsArr.splice(this.itemsArr.length, 0, item);
    this.nextItemID++;
  }

  getItembyId(id: number) {
    return this.itemsArr.find((item) => item.id === id);
  }

  updateItem(itemToBeUpdated: any) {
    const { itemId, newTitle, newDesc, newDueDate } = itemToBeUpdated;
    this.itemsArr[itemId].title = newTitle;
    this.itemsArr[itemId].desc = newDesc;
    this.itemsArr[itemId].dueDate = newDueDate;
  }
}
