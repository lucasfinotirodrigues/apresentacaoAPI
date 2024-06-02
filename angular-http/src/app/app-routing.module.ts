import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { GetComponent } from './pages/get/get.component';
import { PutComponent } from './pages/put/put.component';
import { DeleteComponent } from './pages/delete/delete.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'list/get', component: GetComponent
  },
  {
    path: 'list/post', component: PostComponent
  },
  {
    path: 'list/put', component: PutComponent
  },
  {
    path: 'list/delete', component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
