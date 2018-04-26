import {Component, OnInit} from '@angular/core';
import {ElasticService} from '../services/elastic.service';
import {ElasticServer} from '../models/server';

@Component({
  selector: 'eui-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  elasticServer: ElasticServer;

  constructor(private elasticService: ElasticService) {
    this.elasticService.getServerInfo().subscribe(s => this.elasticServer = s);
  }

  ngOnInit() {
  }

}
