import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DailyRecommendationsPageRoutingModule } from './daily-recommendations-routing.module';
import { DailyRecommendationsPage } from './daily-recommendations.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DailyRecommendationsPageRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DailyRecommendationsPage]
})
export class DailyRecommendationsPageModule {}
