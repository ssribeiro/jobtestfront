import { Injectable } from '@angular/core';
import { WebService } from './web.service';

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

}
