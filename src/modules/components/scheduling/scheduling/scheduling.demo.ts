import { Component } from '@govuk/angularjs-devtools';
import * as model from './scheduling.model';
import * as moment from 'moment';

@Component({
  template: require('./scheduling.demo.html')
})
export class SchedulingDemo {

  referenceDate: moment.Moment = moment();
  fourDayTrialDayPattern: model.DayPattern[] = [
    new model.DayPattern(1, model.Slot.Full),
    new model.DayPattern(2, model.Slot.AM),
    new model.DayPattern(3, model.Slot.AM),
    new model.DayPattern(4, model.Slot.AM)
  ];
  twoDayTrialDayPattern: model.DayPattern[] = [
    new model.DayPattern(1, model.Slot.Full),
    new model.DayPattern(2, model.Slot.AM)
  ];


  events: model.Event[] =  [
    new model.Event('Rodolfo PANICUCCI', this.referenceDate, this.referenceDate.add(4, 'day'),
      this.fourDayTrialDayPattern, new model.Location('Court 1', ['Video link']), 'Trial'),
    new model.Event('Rebecca SWAN', this.referenceDate, this.referenceDate.add(2, 'day'),
     this.twoDayTrialDayPattern, new model.Location('Court 2'), 'PTPH'),
    new model.Event('Tayla BARRON', this.referenceDate.add(1, 'day'), this.referenceDate.add(2, 'day'),
     this.twoDayTrialDayPattern, new model.Location('Court 3'), 'PTPH'),
    new model.Event('Dominik MATKOVIC', this.referenceDate.add(4, 'day'), this.referenceDate.add(4, 'day'),
     [new model.DayPattern(2, model.Slot.PM)], new model.Location('Court 3'), 'PTPH'),
    new model.Event('Chung TSOU', this.referenceDate, this.referenceDate.add(1, 'day'),
     this.twoDayTrialDayPattern, new model.Location('Court 4'), 'PTPH'),
    new model.Event('Fahrettin TROOST', this.referenceDate.add(2, 'day'), this.referenceDate.add(2, 'day'),
     [new model.DayPattern(2, model.Slot.AM)], new model.Location('Court 4'), 'PTPH'),
    new model.Event('Ingunn MARINOSDOTTIR', this.referenceDate, this.referenceDate,
     [new model.DayPattern(2, model.Slot.AM)], new model.Location('Court 5'), 'Trial')
  ];
}
