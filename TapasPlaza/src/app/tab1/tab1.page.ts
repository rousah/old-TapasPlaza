import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
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

  foodImages = [["./assets/images/food1.jpg",
    "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    "Gambas PilPil"
  ],
  ["./assets/images/food2.jpg",
    "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    "Gambas PilPil"
  ],
  ["./assets/images/food3.jpg",
    "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    "Gambas PilPil"
  ]
  ]

  public foodTexts = [
    "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
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
      component: Tab2Page,
      cssClass: 'my-custom-modal'
    });
    return await modal.present();
  }
}
