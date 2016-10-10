import * as angular from 'angular';
import { upgradeAdapter } from './upgrade-adapter';
import { WarningBannerComponent } from '../modules/components/banners/warning/warning-banner.component';

angular.module('govuk-single-page-pdk.components.banners')
  .directive(
    'govWarningBanner',
    upgradeAdapter.downgradeNg2Component(WarningBannerComponent) as angular.IDirectiveFactory
  );

upgradeAdapter.bootstrap(document.documentElement, ['govuk-single-page-pdk.docs']);
