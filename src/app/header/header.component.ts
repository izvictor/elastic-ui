import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ViewsService} from '../services/views.service';
import {ElasticService} from '../services/elastic.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'eui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  elasticSearchUrl: string;

  constructor(private viewService: ViewsService, private elasticService: ElasticService) {
  }

  ngOnInit() {
  }

  isBusy(): boolean {
    return this.viewService.isBusy;
  }

  onSubmit() {
    if (this.elasticSearchUrl) {
      this.elasticService.api = this.elasticSearchUrl;
      this.viewService.isBusy = true;
      this.viewService.loadServerInformation();
    }
  }
}
