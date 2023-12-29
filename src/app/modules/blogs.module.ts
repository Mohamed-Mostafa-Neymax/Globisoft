import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { CommonModule } from "@angular/common";

// Components
import { BlogsComponent } from '../pages/blogs/blogs.component';
import { sharedSectionsHomeBlogsModule } from "./shared-sections-home-blogs.module";

// Modules
import { MaterialModule } from "./material.module";
import { SharedModule } from "./shared.module";
import { GlBlogsComponent } from '../components/gl-blogs/gl-blogs.component';

register();
@NgModule({
    declarations: [
        BlogsComponent,
        GlBlogsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: BlogsComponent }]),
        MaterialModule,
        SharedModule
    ],
    exports: [
        RouterModule,
        sharedSectionsHomeBlogsModule
    ]
})
export class BlogsModule { }