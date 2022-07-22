import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gebruikers',
    loadChildren: () => import('./gebruikers/gebruikers/gebruikers.module').then( m => m.GebruikersPageModule)
  },
  {
    path: 'nieuwe-gebruiker',
    loadChildren: () => import('./gebruikers/nieuwe-gebruiker/nieuwe-gebruiker.module').then( m => m.NieuweGebruikerPageModule)
  },
  {
    path: 'wijzig-gebruiker',
    loadChildren: () => import('./gebruikers/wijzig-gebruiker/wijzig-gebruiker.module').then( m => m.WijzigGebruikerPageModule)
  },
  {
    path: 'planning',
    loadChildren: () => import('./planning/planning/planning.module').then( m => m.PlanningPageModule)
  },
  {
    path: 'plannen',
    loadChildren: () => import('./planning/plannen/plannen.module').then( m => m.PlannenPageModule)
  },
  {
    path: 'nieuwe-data',
    loadChildren: () => import('./planning/nieuwe-data/nieuwe-data.module').then( m => m.NieuweDataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
