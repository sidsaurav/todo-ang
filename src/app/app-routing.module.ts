import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './edit-page/edit-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddTaskPageComponent } from './add-task-page/add-task-page.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'add',
    component: AddTaskPageComponent,
  },
  {
    path: 'dialog',
    component: DialogBoxComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
