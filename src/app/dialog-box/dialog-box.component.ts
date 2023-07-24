import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent {
  @Input() itemIdToBeDeleted: number | undefined;
  @Output() itemIdToBeDeletedChange: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(public items: ItemsService) {}

  @ViewChild('main') main!: ElementRef;
  @ViewChild('sub') sub!: ElementRef;

  hideChild() {
    const clickedElement = event?.target as HTMLElement;
    if (
      clickedElement === this.sub.nativeElement ||
      this.sub.nativeElement.contains(clickedElement)
    ) {
      return;
    }
    this.itemIdToBeDeletedChange.emit(-1);
  }

  deleteItem() {
    this.items.itemsArr = this.items.itemsArr.filter(
      (data, id) => id !== this.itemIdToBeDeleted
    );
    this.itemIdToBeDeletedChange.emit(-1);
  }
}
