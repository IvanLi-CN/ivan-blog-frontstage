import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListRoutingModule} from './list-routing.module';
import {IndexComponent} from '../articles/index.component';
import {ArticlePreviewCardComponent} from './article-preview-card/article-preview-card.component';
import {MomentModule} from 'ngx-moment';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [IndexComponent, ArticlePreviewCardComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    MomentModule,
    CoreModule,
  ]
})
export class ListModule {
}
