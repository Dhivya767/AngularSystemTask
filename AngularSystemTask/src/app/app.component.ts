import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, Platform, ToastController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tap = 0;
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet!: IonRouterOutlet;
  constructor(
    public platform: Platform,
    public toastController: ToastController
  ) {
    // this.logout();
  }

  ngOnInit(): void {
    this.createStorage();
  }

  createStorage() {
    //this.storage.init();
  }
  logout() {
    this.platform.ready().then(() => {
      this.exitAppWithTap();
    })
  }
  exitAppWithTap() {
    if (Capacitor.getPlatform() === 'android') {
      this.platform.backButton.subscribeWithPriority(10, async () => {
        if (this.routerOutlet.canGoBack()) {
          this.tap++;
          if (this.tap === 2) {
            App.exitApp();
          }
          else {
            this.tapAgainToExit();
          }
        }
      })
    }
  }
  async tapAgainToExit() {
    const toast = await this.toastController.create({
      message: 'Press Again To Exit',
      duration: 3000,
    });
    await toast.present();
    const dismiss = await toast.onDidDismiss();
    if (dismiss) {
      this.tap = 0;
    }

  }
}
