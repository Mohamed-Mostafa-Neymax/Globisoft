import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

// Components
import { PortfolioDetailsComponent } from '../pages/portfolio-details/portfolio-details.component';
import { ProjectDetailsComponent } from '../components/portfolio/project-details/project-details.component';
import { SharedModule } from "./shared.module";

@NgModule({
  declarations: [
    PortfolioDetailsComponent,
    ProjectDetailsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: PortfolioDetailsComponent }])
  ],
  exports: [RouterModule],
})
export class PortfolioDetailsModule { }