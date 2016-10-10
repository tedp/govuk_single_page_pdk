import { NgModule } from '@angular/core';
import { WarningBannerComponent } from './warning/warning-banner.component';

@NgModule({
  declarations: [
    WarningBannerComponent
  ],
  exports: [WarningBannerComponent]
})
export class BannersModule {}
