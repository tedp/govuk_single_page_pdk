import scheduling from './scheduling';
import docsUtils from '../../../util/docs';

import { SchedulingDemo } from './scheduling/scheduling.demo';

const module = angular.module('govuk-single-page-pdk.component-demos.scheduling', [
  scheduling,
  docsUtils
])
  .component('govSchedulingDemo', SchedulingDemo);

export default module.name;
