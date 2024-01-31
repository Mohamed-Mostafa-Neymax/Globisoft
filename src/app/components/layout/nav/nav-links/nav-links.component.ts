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
  @Input() productsActive!: boolean;
  navLinks = [
    { title: 'Home', path: '/home' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Products', products: [
      { id: crypto.randomUUID(), title: 'ERP System' },
      { id: crypto.randomUUID(), title: 'Restaurant' },
      { id: crypto.randomUUID(), title: 'Digital Menu' },
      { id: crypto.randomUUID(), title: 'E-Commerce' },
      { id: crypto.randomUUID(), title: 'Hospitals & Clinics' },
      { id: crypto.randomUUID(), title: 'Smart Club' }
    ] },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Blogs', path: '/blogs' },
    { title: 'prices', path: '/prices' },
    { title: 'Contact us', path: '/contact-us' },
  ];
  
  setNavColor(productsLink?: string) {
    return {
      whiteNavColor: (!this.isNavfooter && this.navColorWhite) || this.isNavfooter,
      darkNavColor: !this.isNavfooter && !this.navColorWhite,
      productsActive: this.productsActive && productsLink
    }
  }
}
