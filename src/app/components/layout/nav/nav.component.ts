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
  lang!: string;
  productsActive!: boolean;

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
                navHasBG => 
                  event.url.includes('home') || event.url.length === 1 || navHasBG ? 
                  this.navColorWhite = true : 
                  this.navColorWhite = false
              );
            if (event.url.includes('products')) 
              this.productsActive = true;
            else
              this.productsActive = false;
          };
          
          if (event instanceof NavigationEnd && event.urlAfterRedirects.includes('page-not-found')) 
            this.navColorWhite = false;
        }
      );

    this.uiService.lang_$.subscribe(lang => lang === 'en' ? this.lang = 'English' : this.lang = 'عربي');
  }

  setLangHandler(lang: string) {
    localStorage.setItem('lang', lang);
    this.uiService.lang_$.next(lang);
  }
}
