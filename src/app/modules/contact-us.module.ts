import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { ContactComponent } from '../components/contact/contact.component';

// Modules
import { SharedModule } from "./shared.module";
import { MaterialModule } from "./material.module";

register();
@NgModule({
  declarations: [
    ContactUsComponent,
    ContactComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ContactUsComponent }])
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactUsModule { }