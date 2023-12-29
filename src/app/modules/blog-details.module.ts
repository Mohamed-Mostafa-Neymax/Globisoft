
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BlogDetailsComponent } from "../pages/blog-details/blog-details.component";
import { GlBlogDetailsComponent } from '../components/gl-blogs/gl-blog-details/gl-blog-details.component';

@NgModule({
    declarations: [
        BlogDetailsComponent,
        GlBlogDetailsComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: BlogDetailsComponent }])
    ],
    exports: [RouterModule],
})
export class BlogDetailsModule { }