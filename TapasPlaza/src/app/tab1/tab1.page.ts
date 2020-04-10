import { Component } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public devWidth = this.platform.width();

  public imageLinks = [
    "./assets/images/slide1.jpg",
    "./assets/images/slide2.jpg",
    "./assets/images/slide3.jpg",
  ]

  slideOptions = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
    loop: true,
    setWrapperSize: true
  };

  constructor(
    private navctrl: NavController, 
    private platform: Platform,
    public modalController: ModalController) { 
    console.log("Home tab created")
  }

  public slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  public order() {
    this.navctrl.navigateForward('/tabs/tab2')
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: Tab2Page
    });
    return await modal.present();
  }
}
