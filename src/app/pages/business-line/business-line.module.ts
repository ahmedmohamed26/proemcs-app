import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessLineRoutingModule } from './business-line-routing.module';
import { BusinessLineComponent } from './business-line.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [BusinessLineComponent],
  imports: [CommonModule, BusinessLineRoutingModule, OwlModule],
})
export class BusinessLineModule {}
