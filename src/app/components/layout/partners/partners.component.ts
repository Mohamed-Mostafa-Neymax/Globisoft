import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  @ViewChild('swiperPartnersRef', { static: true }) private swiperPartnersRef!: ElementRef<SwiperContainer>;

  partnersConfig = {
    grid: { rows: 2 },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 20,
      }
    },
    loop: true,
    speed:5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    }
    // navigation: {
    //   nextEl: '.swiper-btn-next',
    //   prevEl: '.swiper-btn-prev'
    // },
    // pagination: true,
    // injectStyles: [
    //   `
    //     .swiper-pagination-bullet {
    //       background: #E5E5E5;
    //       width: 0.7rem;
    //       height: 0.7rem;
    //     }
    //     .swiper-pagination-bullet-active {
    //       background: #E51313;
    //     }
    //   `
    // ]
  };

  partnersSlides = [
    { title:'partner-1', imgPath: '/assets/images/home/partner-1.png' },
    { title:'partner-2', imgPath: '/assets/images/home/partner-2.png' },
    { title:'partner-3', imgPath: '/assets/images/home/partner-3.png' },
    { title:'partner-4', imgPath: '/assets/images/home/partner-4.png' },
    { title:'partner-5', imgPath: '/assets/images/home/partner-5.png' },
    { title:'partner-6', imgPath: '/assets/images/home/partner-6.png' },
    { title:'partner-7', imgPath: '/assets/images/home/partner-7.png' },
    { title:'partner-8', imgPath: '/assets/images/home/partner-8.png' },
    { title:'partner-9', imgPath: '/assets/images/home/partner-9.png' },
    { title:'partner-10', imgPath: '/assets/images/home/partner-10.png' },
    { title:'partner-11', imgPath: '/assets/images/home/partner-11.png' },
    { title:'partner-12', imgPath: '/assets/images/home/partner-12.png' }
  ];

  ngOnInit() {
    const swiperEl = this.swiperPartnersRef.nativeElement;
      Object.assign(swiperEl, this.partnersConfig);
  }
}
