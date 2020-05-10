import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UniversalInterceptorService } from './interceptors/universal-interceptor.service';
import { AppMaterialModule } from './material/app-material.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [CommonModule, AppMaterialModule, PipesModule],
  providers: [UniversalInterceptorService],
  declarations: [],
  exports: [AppMaterialModule, PipesModule]
})
export class SharedModule {}
