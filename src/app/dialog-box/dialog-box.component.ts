import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent {
  constructor(public items: ItemsService) {}

  deleteItem() {
    this.items.removeItem();
    this.items.updateItemIdToBeDeleted(-1);
  }
}
