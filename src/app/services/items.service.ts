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
