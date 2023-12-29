import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';

// Components
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { LogisticsServicesComponent } from '../components/about-us/logistics-services/logistics-services.component';
import { TeamComponent } from '../components/about-us/team/team.component';

// Modules
import { MaterialModule } from "./material.module";
import { sharedSectionsHomeAboutusModule } from "./shared-sections-home-aboutus.module";
import { SharedModule } from "./shared.module";

// Directives
import { IncreaseOnScrollDirective } from "../directives/increase-on-scroll.directive";

register();
@NgModule({
    declarations: [
        AboutUsComponent,
        LogisticsServicesComponent,
        TeamComponent,
        IncreaseOnScrollDirective
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: AboutUsComponent }]),
        MaterialModule,
        sharedSectionsHomeAboutusModule,
        SharedModule
    ],
    exports: [RouterModule]
})
export class AboutUsModule { }