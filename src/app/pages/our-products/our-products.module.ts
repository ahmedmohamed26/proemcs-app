import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurProductsRoutingModule } from './our-products-routing.module';
import { OurProductsComponent } from './our-products.component';
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [OurProductsComponent],
  imports: [
    CommonModule,
    OurProductsRoutingModule,
    OwlModule
  ]
})
export class OurProductsModule { }
