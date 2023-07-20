import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public items: ItemsService,
    public router: Router
  ) {}

  newTitle: string = '';
  newDesc: string = '';
  newDueDate: Date = new Date();
  itemId: any = 0;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.itemId = Number(id);
      const item = this.items.getItembyId(this.itemId); // Assuming you have a method in ItemsService to retrieve an item by ID

      if (item) {
        this.newTitle = item.title;
        this.newDesc = item.desc;
        this.newDueDate = item.due_date;
      }
    });
  }

  saveHandler() {
    const itemToBeUpdated = {
      itemId: this.itemId,
      newTitle: this.newTitle,
      newDesc: this.newDesc,
      newDueDate: this.newDueDate,
    };

    this.items.updateItem(itemToBeUpdated);

    this.router.navigateByUrl('/home');
  }
}
