import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  constructor(private storage:Storage) {
    console.log('Hello HistoryProvider Provider');
  }

}
