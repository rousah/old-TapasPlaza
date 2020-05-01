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
    "./assets/images/slides/slide1.jpg",
    "./assets/images/slides/slide2.jpg",
    "./assets/images/slides/slide3.jpg",
  ]

  foodImages = [["./assets/images/food/salads.JPG",
    "Salads",
    "A salad is a dish consisting of a mixture of small pieces of food, usually vegetables or fruit. The sauce used to flavor a salad is commonly called a salad dressing; most salad dressings are based on either a mixture of oil and vinegar or a fermented milk product like kefir.",
    "Feta Salad"
  ],
  ["./assets/images/food/asian.JPG",
    "Our Asian Touch",
    "“You being Dutch, how come your Thai tastes better than my local at home!?” People ask this all the time. All we can say is this. When we lived in Thailand, Thai chefs taught us their secrets. How they juggle all flavours, textures and colours the Thai cuisine is so famous for. That's our reference. Ever since we cook till it tastes exactly like how it did back there. That's how we got here. So when our food brings you back to Thailand And you find yourself on this Tropical Beach And you ask yourself: “How did I get here?” Then our mission is accomplished...",
    "Nasi Goreng Special"
  ],
  ["./assets/images/food/breakfast.JPG",
    "Breakfast",
    "The definition of breakfast is a morning meal, or the first meal of the day. Eggs and bacon that you eat first thing in the morning for your first meal is an example of breakfast.",
    "Fresh OJ & homemade waffles"
  ],
  ["./assets/images/food/sweets.JPG",
    "Sweets",
    "Candy, also called sweets (British English) or lollies (Australian English, New Zealand English), is a confection that features sugar as a principal ingredient. The category, called sugar confectionery, encompasses any sweet confection, including chocolate, chewing gum, and sugar candy.",
    "Homemade chocolate muffins"
  ],
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
    if (this.devWidth > 992) {
      const modal = await this.modalController.create({
        component: Tab2Page,
        cssClass: 'my-custom-modal'
      });
      return await modal.present();
    }
    else this.order()
  }
}
