import { Component } from '@govuk/angularjs-devtools';
import * as moment from 'moment';

@Component({
  bindings: {
    title: '<',
    courts: '<',
    events: '<',
    startDate: '<'
  },
  template: require('./scheduling.component.html')
})
export class SchedulingComponent {

  startOfWorkingWeek = this.getStartOfWeek(moment());
  endOfWorkingWeek = this.getStartOfWeek(moment()).add(4, 'day');

  weekDays: any = [
    {dayOfWeek: 'Monday', date: this.startOfWorkingWeek},
    {dayOfWeek: 'Tuesday', date: this.startOfWorkingWeek.clone().add(1, 'day')},
    {dayOfWeek: 'Wednesday', date: this.startOfWorkingWeek.clone().add(2, 'day')},
    {dayOfWeek: 'Thursday', date: this.startOfWorkingWeek.clone().add(3, 'day')},
    {dayOfWeek: 'Friday', date: this.startOfWorkingWeek.clone().add(4, 'day')}
  ];

  locations: any = [
    {name: 'Court 1', days: [
      {slots: [
        {slot: 'FULL', title: 'Rodolfo PANICUCCI', session: '1 of 4', type: 'Trial'}
      ]},
      {slots: [
        {slot: 'FULL', title: 'Rodolfo PANICUCCI', session: '2 of 4', type: 'Trial'}
      ]},
      {slots: [
        {slot: 'FULL', title: 'Rodolfo PANICUCCI', session: '3 of 4', type: 'Trial'}
      ]},
      {slots: [
        {slot: 'AM', title: 'Rodolfo PANICUCCI', session: '4 of 4', type: 'Trial'}
      ]},
      {slots: [
        {slot: '', title: '', session: '', type: ''}
      ]}
    ]},
    {name: 'Court 2', days: [
      {slots: [
        {slot: 'FULL', title: 'Rebecca SWAN', session: '1 of 2', type: 'PTPH'}
      ]},
      {slots: [
        {slot: 'AM', title: 'Rebecca SWAN', session: '2 of 2', type: 'PTPH'}
      ]},
      {slots: [
        {slot: '', title: '', session: '', type: ''}
      ]},
      {slots: [
        {slot: '', title: '', session: '', type: ''}
      ]},
      {slots: [
        {slot: '', title: '', session: '', type: ''}
      ]}
    ]},
    {name: 'Court 3', days: [
      {slots: [
        {slot: '', title: '', session: '', type: ''}
      ]},
      {slots: [
        {slot: 'FULL', title: 'Tayla BARRON', session: '1 of 2', type: 'PTPH'}
      ]},
      {slots: [
        {slot: 'FULL', title: 'Tayla BARRON', session: '2 of 2', type: 'PTPH'}
      ]},
      {slots: [
        {slot: '', title: '', session: '', type: ''}
      ]},
      {slots: [
        {slot: 'PM', title: 'Dominik MATKOVIC', session: '1 of 1', type: 'PTPH'}
      ]}
    ]},
    {name: 'Court 4', days: [
      {slots: [
        {slot: 'FULL', title: 'Chung TSOU', session: '1 of 2', type: 'PTPH'}
      ]},
      {slots: [
        {slot: 'AM', title: 'Chung TSOU', session: '2 of 2', type: 'PTPH'}
      ]},
      {slots: [
        {slot: 'AM', title: 'Fahrettin TROOST', session: '1 of 1  ', type: 'PTPH'}
      ]},
      {slots: [
        {slot: '', title: '', session: '', type: ''}
      ]},
      {slots: [
        {slot: '', title: '', session: '', type: ''}
      ]}
    ]},
    {name: 'Court 5', days: [
      {slots: [
        {slot: 'FULL', title: 'Ingunn MARINOSDOTTIR', session: '2 of 7', type: 'Trial'}
      ]},
      {slots: [
        {slot: 'FULL', title: 'Ingunn MARINOSDOTTIR', session: '3 of 7', type: 'Trial'}
      ]},
      {slots: [
        {slot: 'FULL', title: 'Ingunn MARINOSDOTTIR', session: '4 of 7', type: 'Trial'}
      ]},
      {slots: [
        {slot: 'FULL', title: 'Ingunn MARINOSDOTTIR', session: '5 of 7', type: 'Trial'}
      ]},
      {slots: [
        {slot: 'FULL', title: 'Ingunn MARINOSDOTTIR', session: '6 of 7', type: 'Trial'}
      ]}
    ]}
  ];

  public getStartOfWeek(date: moment.Moment): moment.Moment {
    return date.startOf('isoWeek');
  }

}
