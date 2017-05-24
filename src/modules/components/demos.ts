import banners from './banners/banners-demos';
import dataVisualisation from './data-visualisation/data-visualisation-demos';
import formsErrors from './forms-and-errors/forms-errors.demos';
import headersFooters from './headers-and-footers/headers-footers-demos';
import layout from './layout/layout.docs';
import media from './media/media-demos';
import navigation from './navigation/navigation-demos';
import timeline from './timeline/timeline-demos';
import scheduling from './scheduling/scheduling-demos';

const module = angular.module('govuk-single-page-pdk.component-demos', [
  banners,
  dataVisualisation,
  formsErrors,
  headersFooters,
  layout,
  media,
  navigation,
  timeline,
  scheduling
]);

export default module.name;
