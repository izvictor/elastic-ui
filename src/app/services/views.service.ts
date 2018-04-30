import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ViewsService {

  public isBusy: boolean;
  private serverUrl = new Subject<boolean>();
  public serverUrlChanged = this.serverUrl.asObservable();


  constructor() {
  }


  loadServerInformation() {
    this.serverUrl.next(true);
  }


}
