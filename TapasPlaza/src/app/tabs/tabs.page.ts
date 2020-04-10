import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
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
