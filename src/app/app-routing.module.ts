import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgListComponent } from './img-list/img-list.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ImgListComponent },
  { path: 'detail/:id', component: ImgDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
