import {Injectable} from '@angular/core';
import {ElasticServer} from '../models/server';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ElasticService {
  api: string = 'http://localhost:9200';

  constructor(private http: HttpClient) {
  }

  getServerInfo(): Observable<ElasticServer> {
    return this.http.get(this.api).map(response => new ElasticServer().deserialize(response));
  }

}
