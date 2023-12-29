import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';

// Components
import { ProductsComponent } from '../pages/products/products.component';

register();
@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: ProductsComponent }])],
    exports: [RouterModule],
    declarations: [
      ProductsComponent
    ]
})
export class ProductsModule { }