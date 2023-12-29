import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aboutus-digital',
  templateUrl: './aboutus-digital.component.html',
  styleUrls: ['./aboutus-digital.component.scss']
})
export class AboutUsDigitalComponent {
  @Input() isForHome!: boolean;

  description = {
    partOne: 'Web design & development service: Our web design service is a powerhouse of digital creativity, equipped with a talented team of designers, developers, and strategists. With years of experience and a passion for innovation, we specialize in crafting visually stunning and user-centric websites that captivate audiences. ',
    partTwo: 'Partnering with us brings a host of benefits. Our expertise lies not only in creating visually striking designs but also in optimizing user experiences to drive conversions and maximize engagement. We combine our technical proficiency with a deep understanding of the latest industry trends and best practices, ensuring your online presence remains ahead of the curve. Whether you\'re a small business looking to establish your digital footprint or a large enterprise seeking to revamp your online strategy, our company is dedicated to unleashing your digital success. Trust us to bring your vision to life and create a transformative online presence that sets you apart from the competition.'
  }

  getHomeDescription() {
    const textArr = this.description.partOne.split(' ');
    return this.isForHome ? textArr.slice(0, textArr.findIndex(word => word === 'strategists.') + 1).join(' ') : this.description.partOne;
  }
}
