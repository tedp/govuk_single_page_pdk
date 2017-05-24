import banners from './banners/banners';
import dataVisualisation from './data-visualisation/data-visualisation';
import formsErrors from './forms-and-errors/forms-errors';
import headersFooters from './headers-and-footers/headers-footers';
import layout from './layout/layout';
import media from './media/media';
import navigation from './navigation/navigation';
import timeline from './timeline/timeline';
import scheduling from './scheduling/scheduling';
import polyfills from './polyfills/polyfills';

const module = angular.module('govuk-single-page-pdk.components', [
  banners,
  dataVisualisation,
  formsErrors,
  headersFooters,
  layout,
  media,
  navigation,
  polyfills,
  timeline,
  scheduling
]);

export default module.name;
