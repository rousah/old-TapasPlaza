import { Component } from '@angular/core';
import {IonSlides} from '@ionic/angular'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public imageLinks = [
    "./assets/images/slide1.jpg",
    "./assets/images/slide2.jpg",
    "./assets/images/slide3.jpg",
  ]

  slideOptions = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
    loop: true
  };

  constructor() { 
    console.log("Home tab created")
    console.log(this.imageLinks)
  }

  public slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}
