import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'games-list',
  children: [
    {
      path: '', 
      loadChildren: './games-list/games-list.module#GamesListPageModule'
    },
    {
      path: ':movieyear',
      loadChildren: './games/games.module#GamesPageModule' 
    }
  ]
},
  
  { path: 'add-new', loadChildren: './add-new/add-new.module#AddNewPageModule' },
  { path: 'games', loadChildren: './games/games.module#GamesPageModule' },
  { path: 'games-list', loadChildren: './games-list/games-list.module#GamesListPageModule' }
   //loadChildren: './movies-list/movies-list.module#MoviesListPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
