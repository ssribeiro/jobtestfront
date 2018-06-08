import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Observable } from 'rxjs';

import { Day, DayDetails } from '../models/day';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  constructor(
    private web: WebService
  ) { }

  list() {
    return this.web.get('/days');
  }

  get(day:Day) {
    return this.web.get('/days/'+day.day);
  }

}
