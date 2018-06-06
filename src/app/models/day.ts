export interface Day {
  day: number;
  month: string;
  weekday: string;
  orderFromToday: number; // 0 for today, -1 for yesterday, +2 for the day next to tomorrow and so on...
};

export const SampleDay:Day = {
  day: 6,
  month: 'july',
  weekday: 'friday',
  orderFromToday: 0
};

// Monday, Tuesday, Wednesday, Thursday, Friday, Saturday e Sunday

export const SampleDayList:Day[] = [
  {
    day: 4,
    month: 'july',
    weekday: 'wednesday',
    orderFromToday: -2
  },
  {
    day: 5,
    month: 'july',
    weekday: 'thursday',
    orderFromToday: -1
  },
  {
    day: 6,
    month: 'july',
    weekday: 'friday',
    orderFromToday: 0
  },
  {
    day: 7,
    month: 'july',
    weekday: 'saturday',
    orderFromToday: 1
  },
  {
    day: 8,
    month: 'july',
    weekday: 'sunday',
    orderFromToday: 2
  }
];

export const DayMethods = {
  getName:(_:Day):string => {
    switch(_.orderFromToday) {
       case 0: { return 'today'; }
       case -1: { return 'yesterday'; }
       case 1: { return 'tomorrow'; }
       default: { return _.weekday; }
    }
  },
  getWeekShort:(_:Day):string => {
    return _.weekday.substring(0,3);
  },
};

/* auxiliar methods */
export const generateDays = (dayMilseconds:number):Day[] => {
  //to do: generate days from today
  return SampleDayList;
};
