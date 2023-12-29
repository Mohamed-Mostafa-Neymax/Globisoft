import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { AboutUsJourneysComponent } from '../components/shared-sections/aboutus-journeys/aboutus-journeys.component';
import { JourneyStepComponent } from "../components/shared-sections/aboutus-journeys/journey-step/journey-step.component";
import { AboutUsDigitalComponent } from '../components/shared-sections/aboutus-digital/aboutus-digital.component';

// Modules
import { SharedModule } from "./shared.module";

@NgModule({
    declarations: [
        AboutUsJourneysComponent,
        JourneyStepComponent,
        AboutUsDigitalComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
    ],
    exports: [
        AboutUsJourneysComponent,
        AboutUsDigitalComponent
    ]
})
export class sharedSectionsHomeAboutusModule {}