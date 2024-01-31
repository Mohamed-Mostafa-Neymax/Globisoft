import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('swiperHeaderRef', { static: true }) protected swiperHeaderRef!: ElementRef<SwiperContainer>;

  headerConfig = {
    speed: 1000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.swiper-pagi',
      clickable: true,
      loop: true,
      renderBullet: function (index: number, className: string) {
        return `<span class="${className}">0${index + 1}</span>`;
      },
    },
  }
  
  headerSlides = [
    {
      imagePath: '/assets/images/home/slide-1.png',
      title: 'We are specialists at Point of Sales',
      description: 'Manage sales, inventory and employees with ease; increase your revenue. Whether you have single or multiple stores, our System will help run your business.'
    },
    {
      imagePath: '/assets/images/home/slide-2.png',
      title: 'We are specialists at engineering consulting services',
      description: 'Enterprise Resource Planning Integrate company finance, Distribution, Manufacturing,HR,CRM into one cost effective yet scalable solution'
    },
    {
      imagePath: '/assets/images/home/slide-3.png',
      title: 'Web development',
      description: 'We provides expert-level Web Development Services to turn your idea into a high quality web based solution exactly the way you envisioned.'
    }
  ]

  ngOnInit() {
    const swiperEl = this.swiperHeaderRef.nativeElement;
    
    Object.assign(swiperEl, {
      effect: "fade",
      speed: 1000,
      autoplay: {
        delay: 6000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-pagi',
        clickable: true,
        loop: true,
        renderBullet: function (index: number, className: string) {
          return `<span class="${className}">0${index + 1}</span>`;
        },
      },
    });
    swiperEl.initialize();
  }


  slides = [
    {
      imagePath: '/assets/images/home/slide-1.png',
      title: 'We are specialists at Point of Sales',
      description: 'Manage sales, inventory and employees with ease; increase your revenue. Whether you have single or multiple stores, our System will help run your business.'
    },
    {
      imagePath: '/assets/images/home/slide-2.png',
      title: 'We are specialists at engineering consulting services',
      description: 'Enterprise Resource Planning Integrate company finance, Distribution, Manufacturing,HR,CRM into one cost effective yet scalable solution'
    },
    {
      imagePath: '/assets/images/home/slide-3.png',
      title: 'Web development',
      description: 'We provides expert-level Web Development Services to turn your idea into a high quality web based solution exactly the way you envisioned.'
    }
  ]
}
