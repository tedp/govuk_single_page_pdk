import bannersNg1 from './banners/banners.ng1';
import dataVisualisation from './data-visualisation/data-visualisation';
import formsErrors from './forms-and-errors/forms-errors';
import headersFooters from './headers-and-footers/headers-footers';
import media from './media/media';
import navigation from './navigation/navigation';
import timeline from './timeline/timeline';

const module = angular.module('govuk-single-page-pdk.components', [
  bannersNg1,
  dataVisualisation,
  formsErrors,
  headersFooters,
  media,
  navigation,
  timeline
]);

export default module.name;
