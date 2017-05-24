import * as moment from 'moment';

export class Event {


  // constructor(title: string, startDate: moment.Moment, endDate: moment.Moment,
  //             daySlots: DaySlot[], location: Location, eventType: string);

  constructor(public title: string, public startDate: moment.Moment, public endDate: moment.Moment,
              public daySlots: DayPattern[], public location: Location, public eventType: string, public id?: string) {}
}

export class Location {

  constructor(public name: string, public resources?: string[]) {}
}

export class DayPattern {

  constructor(public day: number, public slot: Slot) {

  }
}

export enum Slot {
  AM,
  PM,
  Full
}
