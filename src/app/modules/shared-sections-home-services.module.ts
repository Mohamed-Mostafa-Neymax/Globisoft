import { NgModule } from "@angular/core";


// Components
import { ServicesComponent } from '../components/shared-sections/gl-services/services.component';
import { SharedModule } from "./shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material.module";

@NgModule({
    declarations: [
        ServicesComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
        ServicesComponent,
    ]
})
export class sharedSectionsHomeServicesModule {}