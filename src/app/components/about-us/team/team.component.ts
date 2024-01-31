import { Component } from '@angular/core';

interface teamMember {
  name: string;
  job: string;
  image: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  team: teamMember[] = [
    { name: 'Ayman', job: 'CEO', image: '/assets/images/about-us/member-4.png' },
    { name: 'Shihata', job: 'Senior Back-End Developer', image: '/assets/images/about-us/member-4.png' },
    { name: 'Aya Atiya', job: 'Senior UI&UX Designer', image: '/assets/images/about-us/member-1.png' },
    { name: 'Esraa', job: 'Senior Back-End Developer', image: '/assets/images/about-us/member-2.png' },
    { name: 'Omar', job: 'Senior Front-End Developer', image: '/assets/images/about-us/member-3.png' },
    { name: 'Mohamed Mostafa', job: 'Mid-Senior Front-End Developer', image: '/assets/images/about-us/member-4.png' },
  ]
}
