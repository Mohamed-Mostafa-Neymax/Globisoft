import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    // Static Routes
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home.module').then(module => module.HomeModule) },
    { path: 'about-us', loadChildren: () => import('./about-us.module').then(module => module.AboutUsModule) },
    { path: 'services', loadChildren: () => import('./gl-services.module').then(module => module.GlServicesModule) },
    { path: 'portfolio', loadChildren: () => import('./portfolio.module').then(module => module.PortfolioModule) },
    { path: 'blogs', loadChildren: () => import('./blogs.module').then(module => module.BlogsModule) },
    { path: 'prices', loadChildren: () => import('./prices.module').then(module => module.PricesModule) },
    { path: 'contact-us', loadChildren: () => import('./contact-us.module').then(module => module.ContactUsModule) },
    { path: 'page-not-found', loadChildren: () => import('./404.module').then(module => module.FourOFourModule) },
    
    // Dynamic Routes
    { path: 'portfolio/:id', loadChildren: () => import('./portfolio-details.module').then(module => module.PortfolioDetailsModule) },
    { path: 'blogs/:id', loadChildren: () => import('./blog-details.module').then(module => module.BlogDetailsModule) },
    { path: 'services/:id', loadChildren: () => import('./gl-services-details.module').then(module => module.glServiceDetailsModule) },
    { path: 'products/:id', loadChildren: () => import('./product-details.module').then(module => module.ProductDetailsModule) },
    { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }