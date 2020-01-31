import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadMoreComponent} from './load-more/load-more.component';
import {MomentModule} from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
  ],
  declarations: [LoadMoreComponent],
  exports: [
    LoadMoreComponent,
    MomentModule,
  ]
})
export class SharedModule {
}
