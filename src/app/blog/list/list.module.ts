import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListRoutingModule} from './list-routing.module';
import {MomentModule} from 'ngx-moment';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListRoutingModule,
    MomentModule,
    CoreModule,
  ]
})
export class ListModule {
}
