import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {EuiRoutingModule} from './/eui-routing.module';
import {HomeComponent} from './home/home.component';
import {IndexComponent} from './index/index.component';
import {ClusterComponent} from './cluster/cluster.component';
import {HttpClientModule} from '@angular/common/http';
import {ElasticService} from './services/elastic.service';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    ClusterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    EuiRoutingModule,
    HttpClientModule,
  ],
  providers: [ElasticService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
