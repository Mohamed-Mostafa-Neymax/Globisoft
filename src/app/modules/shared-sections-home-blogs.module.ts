import { NgModule } from "@angular/core";

import { GlBlogsComponent } from "../components/gl-blogs/gl-blogs.component";
import { SharedModule } from "./shared.module";
import { CommonModule } from "@angular/common";
import { PaginationComponent } from "../components/ui/pagination/pagination.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material.module";

@NgModule({
    declarations: [
        GlBlogsComponent,
        PaginationComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    exports: [GlBlogsComponent]
})
export class sharedSectionsHomeBlogsModule {}