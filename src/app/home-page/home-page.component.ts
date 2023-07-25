import { Component } from '@angular/core';
import Todo from '../Todo';
import dummyData from '../dummyData';
import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(public items: ItemsService, public router: Router) {}

  goToAddItem() {
    this.router.navigateByUrl('/add');
  }

  deleteItem(id: number) {
    if (
      document !== null &&
      document.querySelector('app-dialog-box') !== null
    ) {
      //   document.querySelector('app-dialog-box').style.display = 'block';
    }
  }

  public itemIdToBeDeleted: number = -1;
  myScore = 0;
}
