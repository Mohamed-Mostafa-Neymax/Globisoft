import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { register } from 'swiper/element/bundle';

// Components
import { HomeComponent } from '../pages/home/home.component';
import { HeaderComponent } from '../components/home/header/header.component';
import { CustomerReviewsComponent } from '../components/home/customer-reviews/customer-reviews.component';

// Modules
import { MaterialModule } from "./material.module";
import { SharedModule } from "./shared.module";
import { sharedSectionsHomeAboutusModule } from "./shared-sections-home-aboutus.module";
import { sharedSectionsHomeServicesModule } from "./shared-sections-home-services.module";
import { sharedSectionsHomeBlogsModule } from "./shared-sections-home-blogs.module";
import { sharedSectionsHomeProtfolioModule } from "./shared-sections-home-portfolio.module";

register();
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CustomerReviewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    MaterialModule,
    SharedModule,
    sharedSectionsHomeAboutusModule,
    sharedSectionsHomeServicesModule,
    sharedSectionsHomeBlogsModule,
    sharedSectionsHomeProtfolioModule
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }