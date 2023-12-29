import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';

// Modules
import { sharedSectionsHomeProtfolioModule } from "./shared-sections-home-portfolio.module";

// Components
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';

register();
@NgModule({
    declarations: [
      PortfolioComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([{ path: '', component: PortfolioComponent }]),
      sharedSectionsHomeProtfolioModule
    ],
    exports: [
      RouterModule
    ],
})
export class PortfolioModule { }