import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyRecommendationsPage } from './daily-recommendations.page';

describe('DailyRecommendationsPage', () => {
  let component: DailyRecommendationsPage;
  let fixture: ComponentFixture<DailyRecommendationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DailyRecommendationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
