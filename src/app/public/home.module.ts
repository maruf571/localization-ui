import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRouteModule } from './home.routes';
import { Block1Component } from './partials/block1/block1.component';
import { Block2Component } from './partials/block2/block2.component';
import { LayoutModule } from '../shared/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRouteModule,
    LayoutModule,
  ],
  declarations: [
    HomeComponent,
    Block1Component,
    Block2Component
  ],
  exports: [
      HomeComponent
  ]
})
export class HomeModule { }
