import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './edit-page/edit-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    {
        path: 'edit/:id',
        component: EditPageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
