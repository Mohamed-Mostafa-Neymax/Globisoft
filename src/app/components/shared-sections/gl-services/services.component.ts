import { Component, Input } from '@angular/core';

interface glService {
  id: string; 
  title: string; 
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @Input() allServices!: boolean;

  glServices: glService[] = [
    {
      id: crypto.randomUUID(),
      title: 'Software Development',
      description: 'Moving your activity from a limited scope to content that anyone can access via the Internet is a very important step to expand your field and increase your successes.'
    },
    {
      id: crypto.randomUUID(),
      title: 'Websites Design & Development',
      description: 'The best software solutions .. Desktop systems, integrated ERP systems according to the client\'s needs and according to the type of activity and available capabilities'
    },
    {
      id: crypto.randomUUID(),
      title: 'Consulting & Training',
      description: 'GlobiSoft experts are specialized in providing high quality consultations aimed at providing our customers with the best appropriate technical solutions.'
    },
    {
      id: crypto.randomUUID(),
      title: 'OutSourcing & offshore',
      description: 'High-quality solutions to connect the system to a software or hardware system that already exists to reach one integrated system that works efficiently.'
    },
    {
      id: crypto.randomUUID(),
      title: 'Business intelligence',
      description: 'Lorem ipsum dolor sit amet consectetur. Turpis nulla fermentum pulvinar maecenas sit vel varius.'
    },
  ];

  getServices() {
    return this.allServices ? this.glServices : this.glServices.slice(0, 4);
  }
}
