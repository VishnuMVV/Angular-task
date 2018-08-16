import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{ path: '', component: SearchComponent },
{ path: 'search', component: SearchComponent },
{ path: 'movie-list', component: MovieListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ MovieListComponent, SearchComponent ];
