import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './material/app-material.module';
import { PipesModule } from './pipes/pipes.module';
import { ListItemComponent } from 'src/app/components/list-item/list-item.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule, PipesModule],
  providers: [],
  declarations: [ListItemComponent],
  exports: [AppMaterialModule, PipesModule, ListItemComponent]
})
export class SharedModule {}
