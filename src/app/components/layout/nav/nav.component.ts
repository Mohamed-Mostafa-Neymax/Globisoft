import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  navColorWhite!: boolean;

  constructor(
    private router: Router,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.router.events
      .subscribe(
        event => {
          if ( event instanceof NavigationStart ) {
            this.uiService.isNavHasBG_$
            .subscribe(
              navHasBG => event.url.includes('home') || event.url.length === 1 || navHasBG ? this.navColorWhite = true : this.navColorWhite = false
            );
          };
          if ( event instanceof NavigationEnd && event.urlAfterRedirects.includes('page-not-found') ) 
            this.navColorWhite = false;
        }
      )
  }
}
