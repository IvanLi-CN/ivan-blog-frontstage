import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListRoutingModule} from './list-routing.module';
import {ListIndexComponent} from './list-index/list-index.component';

@NgModule({
  declarations: [ListIndexComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule {
}
