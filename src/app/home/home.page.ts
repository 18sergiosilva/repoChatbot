import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { PatronPage } from '../patron/patron.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public platform: Platform,
              public navCtrl: NavController,
              private modalCtrl: ModalController) {
  }

  ngOnInit() {
    console.log(this.platform.platforms());

    let d = this.platform.is('android');
    console.log(d);
  }

  async onClick() {
    const m = await this.modalCtrl.create({
      component: PatronPage,
      backdropDismiss: false
    });
    m.present();
  }

  goToSelphi() {
    this.navCtrl.navigateForward('autenticacion-renap');
  }
  
  goToSpeech() {
    this.navCtrl.navigateForward('speech-recognition');
  }

  goToChatbot() {
    this.navCtrl.navigateForward('chatbot');
  }

}
