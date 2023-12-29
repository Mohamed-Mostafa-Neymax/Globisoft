import { Component } from '@angular/core';

import { journey } from 'src/app/models/journey.model';

@Component({
  selector: 'app-aboutus-journeys',
  templateUrl: './aboutus-journeys.component.html',
  styleUrls: ['./aboutus-journeys.component.scss']
})
export class AboutUsJourneysComponent {

  journeys: journey[] = [
    {
      duration: 'From 2001 To 2005',
      title: 'Start as a Software House',
      description: 'started Globisoft as a software house in Smouha Alexandria then introduced the ERP for healthcare AHMS (Advanced Hospital Management System) in beginning and applied it in many hospitals mainly in Alexandria.'
    },
    {
      duration: 'From 2006 To 2010',
      title: 'Specialized in BI',
      description: 'started BI (Business Intelligence) and DW (data warehousing) line of business in Globisoft as the niche player in the market at that time. Globisoft became Cognos sole partner in Egypt before it was acquired by IBM. We delivered BI services locally to many multinational companies like GSK (GlaxoSmithKline ) and Lafarge-Titan the giant cement manufacturing company’s joint venture at that time.'
    },
    {
      duration: 'From 2011 To 2015',
      title: 'Expand Regionally',
      description: 'participated in two very large projects in MENA: First is Score-carding for KNPC (Kuwait National Petroleum Company) in cooperation with IBM. Second project is Data Warehousing and Enterprise Reporting for QMOI (Qatar Ministry of Interior).'
    },
    {
      duration: 'From 2016 To 2020',
      title: 'Revolutionize our ERP Almongez',
      description: 'Extend our locally developed ERP to cover many other sectors like Restaurants and slaughtering Houses. We introduced modules like POS (Point of Sale), Production, Manufacturing, Dine-in, Dine-out, Delivery and call center. Applied in many restaurants with more than 10 interconnected branches.'
    },
    {
      duration: 'From 2021 To 2023',
      title: 'Become Worldwide SW Provider',
      description: '2021 Add Web Design & Development to our services portfolio and deliver our first cloud based application for Journal of Ancient Near East Civilizations (JANEC). Then followed by many web sites like Amer Group for cars and Bloom properties. 2023 Introduced our new product Digital Menu to augment our restaurants solution and facilitates easy ordering by QR Scan without installing any mobile application.'
    },
  ]
}
