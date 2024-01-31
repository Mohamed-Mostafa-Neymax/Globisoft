import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

// Components
import { GlServicesDetailsComponent } from '../pages/gl-services-details/gl-services-details.component';
import { ServicesDetailsComponent } from '../components/gl-services/services-details/services-details.component';

// Modules
import { SharedModule } from "./shared.module";

@NgModule({
    declarations: [
        GlServicesDetailsComponent,
        ServicesDetailsComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: GlServicesDetailsComponent }]),
        SharedModule
    ],
    exports: [RouterModule]
})
export class glServiceDetailsModule { }