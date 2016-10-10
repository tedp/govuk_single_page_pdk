import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BannersModule } from '../modules/components/banners/banners';

@NgModule({
  imports: [
    BrowserModule,
    BannersModule
  ]
})
export class AppModule {}
