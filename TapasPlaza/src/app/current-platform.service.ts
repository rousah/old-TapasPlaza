import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class CurrentPlatformService {
  public desktop: boolean

  constructor(
    private platform: Platform
  ) {
    if (this.platform.width() > 991) {
      this.desktop = true
      console.log("top")
    }
    else {
      this.desktop = false
      console.log("bottom")
    }
  }
}
