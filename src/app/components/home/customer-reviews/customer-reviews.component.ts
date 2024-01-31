import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent {
  reviewSwiper!: Swiper | undefined;
  currentProject = 1;

  projectsSlides = [
    { 
      name: 'Henry Itondo', 
      job: 'Developer', 
      review: 'Kindergarten provides your child with an opportunity to learn and practice the essential social, emotional, problem-solving, and study skills that he will use throughout his schooling.',
      imgPath: '/assets/images/home/reviewer-1.png'
    },
    { 
      name: 'Henry Itondo', 
      job: 'Developer', 
      review: 'Kindergarten provides your child with an opportunity to learn and practice the essential social, emotional, problem-solving, and study skills that he will use throughout his schooling.',
      imgPath: '/assets/images/home/reviewer-2.png'
    },
    { 
      name: 'Henry Itondo', 
      job: 'Developer', 
      review: 'Kindergarten provides your child with an opportunity to learn and practice the essential social, emotional, problem-solving, and study skills that he will use throughout his schooling.',
      imgPath: '/assets/images/home/reviewer-1.png'
    },
    { 
      name: 'Henry Itondo', 
      job: 'Developer', 
      review: 'Kindergarten provides your child with an opportunity to learn and practice the essential social, emotional, problem-solving, and study skills that he will use throughout his schooling.',
      imgPath: '/assets/images/home/reviewer-2.png'
    }
  ];

  projectsConfig = {
    breakpoints: {
      250: { slidesPerView: 1, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 20 }
    },
    navigation: {
      nextEl: '.swiper-prog-button-next',
      prevEl: '.swiper-prog-button-prev',
    },
    pagination: {
      el: '.swiper-pagination-progressbar',
      type: 'progressbar' as 'progressbar',
    }
  };

  initSwiper() {
    this.reviewSwiper = new Swiper('.swiper-progress-container', this.projectsConfig);
  };

  ngAfterViewInit() {
    this.initSwiper();
  };

  nextSlide() {
    if ( this.reviewSwiper ) {
      this.reviewSwiper.on('slideChange', () => {
        const activeIndex = this.reviewSwiper && this.reviewSwiper.activeIndex;
        const slidesPerPage = this.reviewSwiper && this.reviewSwiper.params.slidesPerView;
        if ( activeIndex !== undefined && slidesPerPage !== undefined ) 
          this.currentProject = activeIndex + +slidesPerPage;
      });
    }
  }
}
