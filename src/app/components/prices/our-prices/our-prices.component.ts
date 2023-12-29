import { Component } from '@angular/core';
import { price } from 'src/app/models/prices.model';

@Component({
  selector: 'app-our-prices',
  templateUrl: './our-prices.component.html',
  styleUrls: ['./our-prices.component.scss']
})
export class OurPricesComponent {

  prices: price[] = [
    {
      title: '<50 Item 200',
      subTitle: 'View plan',
      type: 'Billed annually.',
      features: [
        { title: '7 Days Free Trial', isAvailable: true },
        { title: 'Multilingual QR Code Digital Menu', isAvailable: true },
        { title: 'Items Management', isAvailable: true },
        { title: 'Menus Management', isAvailable: true },
        { title: 'Product Variants', isAvailable: true },
        { title: 'Product Addons', isAvailable: true },
        { title: 'Sales Reports', isAvailable: false },
        { title: 'User Management', isAvailable: false },
        { title: 'Mobile Ordering', isAvailable: false },
        { title: 'View Orders Filtered By Branch', isAvailable: false },
        { title: 'Customer Management', isAvailable: false },
        { title: 'Allow other systems to take orders via API', isAvailable: false },
        { title: 'Overall Reports', isAvailable: false }
      ]
    },
    {
      title: '<250 Order 200',
      subTitle: 'Takeaway plan',
      type: 'Billed annually.',
      features: [
        { title: '7 Days Free Trial', isAvailable: true },
        { title: 'Multilingual QR Code Digital Menu', isAvailable: true },
        { title: 'Items Management', isAvailable: true },
        { title: 'Menus Management', isAvailable: true },
        { title: 'Product Variants', isAvailable: true },
        { title: 'Product Addons', isAvailable: true },
        { title: 'Sales Reports', isAvailable: true },
        { title: 'User Management', isAvailable: true },
        { title: 'Mobile Ordering', isAvailable: true },
        { title: 'View Orders Filtered By Branch', isAvailable: true },
        { title: 'Customer Management', isAvailable: false },
        { title: 'Allow other systems to take orders via API', isAvailable: false },
        { title: 'Overall Reports', isAvailable: false }
      ]
    },
    {
      title: '<250 Order 300',
      subTitle: 'Delivery plan',
      type: 'Billed annually.',
      features: [
        { title: '7 Days Free Trial', isAvailable: true },
        { title: 'Multilingual QR Code Digital Menu', isAvailable: true },
        { title: 'Items Management', isAvailable: true },
        { title: 'Menus Management', isAvailable: true },
        { title: 'Product Variants', isAvailable: true },
        { title: 'Product Addons', isAvailable: true },
        { title: 'Sales Reports', isAvailable: true },
        { title: 'User Management', isAvailable: true },
        { title: 'Mobile Ordering', isAvailable: true },
        { title: 'View Orders Filtered By Branch', isAvailable: true },
        { title: 'Customer Management', isAvailable: true },
        { title: 'Allow other systems to take orders via API', isAvailable: true },
        { title: 'Overall Reports', isAvailable: true }
      ]
    },
    {
      title: '<50 Item 200',
      subTitle: 'View plan',
      type: 'Billed annually.',
      features: [
        { title: '7 Days Free Trial', isAvailable: true },
        { title: 'Multilingual QR Code Digital Menu', isAvailable: true },
        { title: 'Items Management', isAvailable: true },
        { title: 'Menus Management', isAvailable: true },
        { title: 'Product Variants', isAvailable: true },
        { title: 'Product Addons', isAvailable: true },
        { title: 'Sales Reports', isAvailable: true },
        { title: 'User Management', isAvailable: true },
        { title: 'Mobile Ordering', isAvailable: true },
        { title: 'View Orders Filtered By Branch', isAvailable: true },
        { title: 'Customer Management', isAvailable: true },
        { title: 'Allow other systems to take orders via API', isAvailable: true },
        { title: 'Overall Reports', isAvailable: true }
      ]
    },
  ]
}
