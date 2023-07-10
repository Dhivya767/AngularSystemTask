import { AfterViewInit, Component, ElementRef, EventEmitter, Input, NgZone, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileDetailsService } from '../profile-details.service';
import { AlertController, GestureController, IonCard, Platform } from '@ionic/angular';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-daily-recommendations',
  templateUrl: './daily-recommendations.page.html',
  styleUrls: ['./daily-recommendations.page.scss'],
})
export class DailyRecommendationsPage implements AfterViewInit {
  constructor(
    public router: Router,
    public alertController: AlertController,
    public profileService: ProfileDetailsService,
    private gestureCtrl:GestureController,
     private zone :NgZone,
     private plt :Platform
  ) {
  }
  @ViewChildren(IonCard, { read: ElementRef })
  cards!: QueryList<ElementRef>;
  longPressActive=false;
  profileList = [
    {
      name: 'Dhivya Kamaraj',
      line1: '25 Yrs, 6 ft 2 in, Tamil,Hindu',
      line2: 'BE, Software Engineer, Chennai',
      line3: 'Tamil Nadu, India',
      image: '/assets/imgs/profile3.jpg',
    },
    {
      name: 'Nazriya Nazim',
      line1: '26 Yrs, 5 ft 2 in, Tamil,Nair',
      line2: 'MBBS, Doctor, Chennai',
      line3: 'Tamil Nadu, India',
      image: '/assets/imgs/profile2.jpeg',
    },
    {
      name: 'Trisha Krishnan',
      line1: '27 Yrs, 5 ft 2 in, Tamil,Nair',
      line2: 'MBBS, Doctor, Chennai',
      line3: 'Tamil Nadu, India',
      image: '/assets/imgs/profile.jpeg',
    },
  ];
  ngOnInit() {}
  ngAfterViewInit() {
    const cardArray= this.cards.toArray();
    //this.useLongPress(cardArray);
    this.useTinderSwipe(cardArray)
  }
  backToProfile(){
    this.router.navigateByUrl('/home/profile')
  }
  setCardColor(x:any,element:any){
  let color=''
  const abs=Math.abs(x);
  const min =Math.trunc(Math.min(16 * 16-abs,16* 16));
  const hexCode =this.decimalToHex(min,2);
  if(x<0){
  color='#fff'+ hexCode+hexCode;
  }
  else{
  color='ff'+hexCode+'ff'+hexCode
  }
   element.style.background=color
  }
  decimalToHex(d:any, padding:any){
   let hex=Number(d).toString(16);
   padding=typeof padding ==='undefined'|| padding ==='null' ? (padding =2):padding
   while (hex.length <padding){
    hex ='0' + hex
   }
   return hex;
  }
  useLongPress(cardArray:any){
     for (let i=0 ; i<cardArray.length; i++){
     const card=cardArray[i];
     const gesture=this.gestureCtrl.create({
      el:card.nativeElement,
      gestureName:'long-press',
      onStart : ev =>{
     this.longPressActive=true;
     this.increasePower(i);
      },
      onEnd : ev =>{
      this.longPressActive=false
      }
     });
     gesture.enable(true)
     }
  }
  increasePower(i:any){
    setTimeout(() => {
      if(this.longPressActive){
        this.zone.run(()=>{
          //this.profileList[i]
          this.increasePower(i)
        })
      }
    },200)
  }
  useTinderSwipe(cardArray:any){
    for (let i=0 ; i<cardArray.length; i++){
      const card=cardArray[i];
      const gesture=this.gestureCtrl.create({
       el:card.nativeElement,
       gestureName:'swipte',
       onStart : ev =>{
      
       },
       onMove : ev =>{
       card.nativeElement.style.transform=`translateX(${ev.deltaX}px) rotate(${ev.deltaX/10}deg)`
       },
       onEnd : ev =>{
      card.nativeElement.style.transition='.5s ease-out'
      if(ev.deltaX >150){
        card.nativeElement.style.transform=`translateX(${+this.plt.width()*2}px) rotate(${ev.deltaX/2}deg)`
      }
      else if( ev.deltaX <-150){
        card.nativeElement.style.transform=`translateX(${-this.plt.width()*2}px) rotate(${ev.deltaX/2}deg)`
      }
       }
      });
      gesture.enable(true)
      }
  }
  async openYes(){
    let alert = await this.alertController.create({
      message: 'Interested',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    alert.present();
  }
 async openNo(){
    let alert = await this.alertController.create({
      message: 'Not Interested',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    alert.present();
  }
 async open(){
    let alert = await this.alertController.create({
      message: 'Shortlisted',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    alert.present();
  }


}
