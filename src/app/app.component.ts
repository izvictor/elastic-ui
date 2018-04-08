import { Component } from '@angular/core';

@Component({
  selector: 'eui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
