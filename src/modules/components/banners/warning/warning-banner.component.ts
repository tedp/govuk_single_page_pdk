import { Component, Input } from '@angular/core';

@Component({
  selector: 'gov-warning-banner',
  template: require('./warning-banner.component.html')
})
export class WarningBannerComponent {
    @Input() message: string;
}
