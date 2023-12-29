import { Component, Input } from '@angular/core';
import { price } from 'src/app/models/prices.model';

@Component({
  selector: 'app-price-item',
  templateUrl: './price-item.component.html',
  styleUrls: ['./price-item.component.scss']
})
export class PriceItemComponent {
  @Input() price!: price;
}
