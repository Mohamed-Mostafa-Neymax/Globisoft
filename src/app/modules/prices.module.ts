import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { register } from 'swiper/element/bundle';

// Components
import { PricesComponent } from '../pages/prices/prices.component';
import { OurPricesComponent } from '../components/prices/our-prices/our-prices.component';
import { PriceItemComponent } from '../components/prices/price-item/price-item.component';

// Modules
import { SharedModule } from "./shared.module";


register();
@NgModule({
    declarations: [
        PricesComponent,
        OurPricesComponent,
        PriceItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: PricesComponent }]),
        SharedModule
    ],
    exports: [RouterModule]
})
export class PricesModule { }