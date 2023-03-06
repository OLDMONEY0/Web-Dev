import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
 

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },

  {
    component:AboutComponent,
    path: 'about'
  },

  {
    component:AlbumsComponent,
    path: 'albums'
  },

  {
    component:AlbumDetailComponent,
    path: 'albums/:id'
  },

  {
    component:AlbumPhotosComponent,
    path:'albums/:id/photos'
  },

  {
    redirectTo: 'home',
    path: '',
    pathMatch:'full'
  },

  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
