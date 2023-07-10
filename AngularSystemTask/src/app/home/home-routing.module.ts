import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile-details/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'profile-detail',
        loadChildren: () => import('./profile-details/profile-detail/profile-detail.module').then( m => m.ProfileDetailPageModule)
      },
      {
        path: 'daily-recommendations',
        loadChildren: () => import('./profile-details/daily-recommendations/daily-recommendations.module').then( m => m.DailyRecommendationsPageModule)
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
