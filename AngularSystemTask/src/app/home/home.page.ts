import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public appPages = [

    // { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    // { title: 'Config', url: '/app-developer-config', icon: 'cog' },
    // { title: 'Message Centre', url: '/app-message', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    { title: 'Home', url: '/home/my-balance', icon: 'assets/imgs/home.svg' },
    { title: 'Profile', url: '/home/my-profile', icon: 'person' },
    { title: 'My Account', url: '/home/my-account', icon: 'person-circle' },
    { title: 'Payment History', url: '/home/payment-history', icon: 'newspaper' },
    { title: 'Transaction', url: '/home/transaction', icon: 'swap-horizontal' },
    { title: 'Nominations', url: '/home/nominations', icon: 'receipt' },
    { title: 'Statements', url: '/home/statements', icon: 'document' },
    { title: 'Withdrawal Status', url: '/home/withdrawal-status', icon: 'receipt' },
    { title: 'Employment History', url: '/home/employment-history', icon: '' },
    { title: 'My Pension', url: '/home/my-pension', icon: '' },
    { title: 'Pension Option', url: '/home/pension-options', icon: '' },
    { title: 'Renewal Certificate', url: '/home/renewal-certificate', icon: '' },
    { title: 'My Messages', url: '/home/my-messages', icon: '' },
    { title: 'Logout', url: '/staff-login-step1', icon: 'power' },


  ];
  // 
  user = {
    first_name: "",
    last_name: "",
    dob: ""
  }
  errorTrue = false;
  constructor(

  ) { }



}
