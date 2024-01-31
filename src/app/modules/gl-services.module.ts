import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';

// Components
import { GlServicesComponent } from '../pages/gl-services/gl-services.component';

// Modules
import { sharedSectionsHomeServicesModule } from "./shared-sections-home-services.module";

register();
@NgModule({
  declarations: [
    GlServicesComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: GlServicesComponent }]),
    sharedSectionsHomeServicesModule
  ],
  exports: [RouterModule],
})
export class GlServicesModule { }