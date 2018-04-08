import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {IndexComponent} from './index/index.component';
import {ClusterComponent} from './cluster/cluster.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'index', component: IndexComponent},
  {path: 'cluster', component: ClusterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class EuiRoutingModule {

}
