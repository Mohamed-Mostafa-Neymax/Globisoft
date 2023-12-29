import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';

// Components
import { PageNotFoundComponent } from "../pages/page-not-found/page-not-found.component";
import { NotFoundComponent } from '../components/not-found/not-found.component';

// Modules
import { SharedModule } from "./shared.module";

register();
@NgModule({
    declarations: [
        PageNotFoundComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: PageNotFoundComponent }]),
        SharedModule
    ],
    exports: [RouterModule]
})
export class FourOFourModule { }