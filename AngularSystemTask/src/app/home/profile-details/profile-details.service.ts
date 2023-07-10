import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsService {
  pendingCount = 8;
  newCount = 5;
  viewProfile: any = {};
  profile = {
    name: 'Trisha Krishnan',
    line1: '27 Yrs, 5 ft 2 in, Tamil,Nair',
    line2: 'MBBS, Doctor, Chennai',
    line3: 'Tamil Nadu, India',
    image: '/assets/imgs/profile.jpeg',
  };

  profileList = [
    {
      name: 'Trisha Krishnan',
      line1: '27 Yrs, 5 ft 2 in, Tamil,Nair',
      line2: 'MBBS, Doctor, Chennai',
      line3: 'Tamil Nadu, India',
      image: '/assets/imgs/profile.jpeg',
    },
    {
      name: 'Nazriya Nazim',
      line1: '26 Yrs, 5 ft 2 in, Tamil,Nair',
      line2: 'MBBS, Doctor, Chennai',
      line3: 'Tamil Nadu, India',
      image: '/assets/imgs/profile2.jpeg',
    },
    {
      name: 'Dhivya Kamaraj',
      line1: '25 Yrs, 6 ft 2 in, Tamil,Hindu',
      line2: 'BE, Software Engineer, Chennai',
      line3: 'Tamil Nadu, India',
      image: '/assets/imgs/profile3.jpg',
    },
  ];

  constructor() {}
}
