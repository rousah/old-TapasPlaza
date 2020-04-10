import { Component } from '@angular/core';
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    desktop: boolean
  
    constructor(
      private platform: Platform
    ) {
      if (this.platform.width() > 991) {
        this.desktop = true
      }
      else {
        this.desktop = false
      }
    }

}
