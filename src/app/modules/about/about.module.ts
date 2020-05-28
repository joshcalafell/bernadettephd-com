import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { products } from 'src/app/components/product-list/products';
import { ProductListModule } from 'src/app/components/product-list/product-list.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule, ProductListModule]
})
export class AboutModule {}
