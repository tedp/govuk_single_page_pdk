import { SchedulingComponent } from './scheduling/scheduling.component';


const module = angular.module('govuk-single-page-pdk.components.scheduling', [])
  .component('govScheduling', SchedulingComponent);

export default module.name;
