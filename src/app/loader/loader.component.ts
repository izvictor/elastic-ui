import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'eui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() waitingObject: any;

  constructor() {
  }

  ngOnInit() {
  }


}
