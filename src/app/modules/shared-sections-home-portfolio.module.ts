import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

// Modules
import { SharedModule } from "./shared.module";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";

// Components
import { PortfolioProjectsComponent } from "../components/shared-sections/portfolio-projects/portfolio-projects.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        PortfolioProjectsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        RouterModule
    ],
    exports: [
        PortfolioProjectsComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class sharedSectionsHomeProtfolioModule {}