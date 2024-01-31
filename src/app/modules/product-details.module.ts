import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';

// Components
import { ProductDetailsComponent } from '../pages/product-details/product-details.component';
import { ProductComponent } from '../components/product/product.component';
import { SharedModule } from "./shared.module";

register();
@NgModule({
    declarations: [
      ProductDetailsComponent,
      ProductComponent
    ],
    imports: [
      RouterModule.forChild([{ path: '', component: ProductDetailsComponent }]),
      SharedModule
    ],
    exports: [RouterModule]
})
export class ProductDetailsModule { }