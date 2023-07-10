import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ProfileDetailsService } from '../profile-details.service';
import Swiper, { Pagination } from 'swiper';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    public router: Router,
    public alertController: AlertController,
    public profileService: ProfileDetailsService
  ) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.init();
  }

  init() {
    const swiper = new Swiper('.swiper', {
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  navigate(val: any) {
    this.profileService.viewProfile = val;
    console.log(this.profileService.viewProfile);
    this.router.navigateByUrl('/home/profile-detail');
  }
}
