import { Component, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss'],
})
export class PortfolioProjectsComponent {
  @Input() isProjectsForHome!: boolean;
  portfolioSwiper!: Swiper | undefined;

  projectsSlides = [
    { id: 1, title:'partner-1', imgPath: '/assets/images/home/project-1.png' },
    { id: 2, title:'project-2', imgPath: '/assets/images/home/project-2.png' },
    { id: 3, title:'project-3', imgPath: '/assets/images/home/project-3.png' },
    { id: 4, title:'project-4', imgPath: '/assets/images/home/project-4.png' },
    { id: 5, title:'project-5', imgPath: '/assets/images/home/project-5.png' }
  ];

  projectsConfig = {
    breakpoints: {
      250: { slidesPerView: 1, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 20 }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    }
  };

  initSwiper() {
    this.portfolioSwiper = new Swiper('.swiper-container', this.projectsConfig);
  };

  ngAfterViewInit() {
    this.initSwiper();
  };

}
