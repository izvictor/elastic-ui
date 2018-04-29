import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ElasticService} from '../services/elastic.service';
import {ElasticServer} from '../models/server';
import {ViewsService} from '../services/views.service';
import {Subscription} from 'rxjs/Subscription';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'eui-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  elasticServer: ElasticServer;

  onServerUrlChanged: Subscription;

  constructor(private elasticService: ElasticService, private viewService: ViewsService, private snackBar: MatSnackBar) {
    this.onServerUrlChanged = this.viewService.serverUrlChanged.subscribe(
      m => {
        this.loadServerInformation();
      });
  }

  ngOnInit() {
  }

  loadServerInformation() {
    this.elasticService.getServerInfo().subscribe(s => {
        this.elasticServer = s;
      }, e => {
        this.viewService.isBusy = false;
        this.snackBar.open('Error quering server at URL : ' + this.elasticService.api, null, {
          duration: 2000,
        });
        this.elasticServer = null;

      }, () => {
        this.viewService.isBusy = false;
      }
    );

  }

  ngOnDestroy(): void {
    // prevent memory leak when component destroyed
    this.onServerUrlChanged.unsubscribe();
  }

}
