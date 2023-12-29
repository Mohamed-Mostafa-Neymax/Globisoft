import { Component, Input } from '@angular/core';

import { journey } from 'src/app/models/journey.model';

@Component({
  selector: 'app-journey-step',
  templateUrl: './journey-step.component.html',
  styleUrls: ['./journey-step.component.scss']
})
export class JourneyStepComponent {
  @Input() journey!: journey;
  @Input() journeyIndex!: number;
}
