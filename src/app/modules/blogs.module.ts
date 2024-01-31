import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';

// Components
import { BlogsComponent } from '../pages/blogs/blogs.component';
import { sharedSectionsHomeBlogsModule } from "./shared-sections-home-blogs.module";

register();
@NgModule({
    declarations: [
        BlogsComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: BlogsComponent }]),
        sharedSectionsHomeBlogsModule
    ],
    exports: [
        RouterModule,
    ]
})
export class BlogsModule { }