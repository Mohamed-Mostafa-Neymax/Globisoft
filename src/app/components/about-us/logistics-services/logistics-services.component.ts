import { Component } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';

import { UiService } from './../../../services/ui.service';

@Component({
  selector: 'app-logistics-services',
  templateUrl: './logistics-services.component.html',
  styleUrls: ['./logistics-services.component.scss']
})
export class LogisticsServicesComponent {

  Logistics = [
    { title: 'Years of operations ', startValue: 0, endValue: 23, },
    { title: 'Reference Countries  ', startValue: 0, endValue: 12, },
    { title: 'Happy clients ', startValue: 0, endValue: 500 },
    { title: 'Staff members ', startValue: 0, endValue: 20 }
  ];
  increaseSubscription!: Subscription;

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.isWindowInArea
      .pipe( take(1) )
      .subscribe( _isInArea => this.increaseHandler() );
  }

  increaseHandler() {
    for ( let c = 0; c < this.Logistics.length; c++ ) {
      this.increaseSubscription = interval(150)
        .subscribe(_num => this.Logistics[c].startValue < this.Logistics[c].endValue && c !== 2 ? this.Logistics[c].startValue += 1 : this.increaseSubscription.unsubscribe());
      this.increaseSubscription = interval(80)
        .subscribe(_num => this.Logistics[c].startValue < this.Logistics[c].endValue && c === 2 ? this.Logistics[c].startValue += 10 : this.increaseSubscription.unsubscribe());
    }
  }
}
