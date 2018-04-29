import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ViewsService {

  isBusy: boolean;
  private serverUrl = new Subject<boolean>();
  serverUrlChanged = this.serverUrl.asObservable();


  constructor() {
  }

  loadServerInformation() {
    this.serverUrl.next(true);
  }


}
