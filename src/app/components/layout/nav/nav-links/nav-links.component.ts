import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})

export class NavLinksComponent {

  @Input() classes!: string;
  @Input() isNavfooter!: boolean;
  @Input() navColorWhite!: boolean;
  navLinks = [
    { title: 'Home', path: '/home' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Products', path: '/products' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Blogs', path: '/blogs' },
    { title: 'prices', path: '/prices' },
    { title: 'Contact us', path: '/contact-us' },
  ];
  
  setNavColor() {
    return {
      whiteNavColor: (!this.isNavfooter && this.navColorWhite) || this.isNavfooter,
      darkNavColor: !this.isNavfooter && !this.navColorWhite
    }
  }

}
