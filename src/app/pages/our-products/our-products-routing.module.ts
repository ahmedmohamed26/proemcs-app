import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurProductsComponent } from './our-products.component';

const routes: Routes = [{ path: '', component: OurProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurProductsRoutingModule { }
