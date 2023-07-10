import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from '../profile-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {

  constructor(public profileService:ProfileDetailsService,public router:Router) { }

  ngOnInit() {
  }
  backtoProfile(){
    this.router.navigateByUrl('/home/profile')
  }
}
