import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

// Modules
import { MaterialModule } from '../modules/material.module';

// Components
import { LayoutComponent } from '../components/layout/layout.component';
import { NavLinksComponent } from '../components/layout/nav/nav-links/nav-links.component';
import { NavComponent } from '../components/layout/nav/nav.component';
import { ReadyComponent } from '../components/layout/ready/ready.component';
import { PartnersComponent } from '../components/layout/partners/partners.component';
import { FooterComponent } from '../components/layout/footer/footer.component';
import { ButtonComponent } from "../components/ui/button/button.component";
import { TitleSectionComponent } from '../components/ui/title-section/title-section.component';
import { TextComponent } from '../components/ui/text/text.component';

// Directives
import { BgOnScrollDirective } from "../directives/bg-on-scroll.directive";

@NgModule({
    declarations: [
        ButtonComponent, 
        LayoutComponent,
        TitleSectionComponent,
        TextComponent,
        NavComponent,
        NavLinksComponent,
        FooterComponent,
        PartnersComponent,
        ReadyComponent,
        BgOnScrollDirective,
    ],
    imports: [
        RouterModule,
        CommonModule,
        MaterialModule
    ],
    exports: [
        ButtonComponent,
        LayoutComponent,
        TitleSectionComponent,
        TextComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}