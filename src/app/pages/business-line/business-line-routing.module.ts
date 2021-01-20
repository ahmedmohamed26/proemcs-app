import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessLineComponent } from './business-line.component';

const routes: Routes = [{ path: '', component: BusinessLineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessLineRoutingModule {}
