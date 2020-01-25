import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadMoreComponent} from './load-more/load-more.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadMoreComponent],
  exports: [
    LoadMoreComponent,
  ]
})
export class SharedModule {
}
