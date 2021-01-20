import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'business-line', loadChildren: () => import('./pages/business-line/business-line.module').then(m => m.BusinessLineModule)
  },
  {
    path: 'our-products', loadChildren: () => import('./pages/our-products/our-products.module').then(m => m.OurProductsModule)
  },
  {
    path: 'our-clients', loadChildren: () => import('./pages/our-clients/our-clients.module').then(m => m.OurClientsModule)
  },
  {
    path: 'contact-us', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
