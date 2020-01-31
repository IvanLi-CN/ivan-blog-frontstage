import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticlesRoutingModule} from './articles-routing.module';
import {ArticleViewComponent} from './article-view/article-view.component';
import {ArticleViewHeaderComponent} from './article-view-header/article-view-header.component';
import {ArticleViewFooterComponent} from './article-view-footer/article-view-footer.component';
import {ArticleViewTextComponent} from './article-view-text/article-view-text.component';
import {ArticlePreviewCardComponent} from './article-preview-card/article-preview-card.component';
import {IndexComponent} from './index.component';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [
    IndexComponent,
    ArticleViewComponent,
    ArticlePreviewCardComponent,
    ArticleViewHeaderComponent,
    ArticleViewFooterComponent,
    ArticleViewTextComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    CoreModule,
  ]
})
export class ArticlesModule {
}
