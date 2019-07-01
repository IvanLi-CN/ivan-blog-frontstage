import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticlesRoutingModule} from './articles-routing.module';
import {ArticleViewComponent} from './article-view/article-view.component';
import {ArticleViewHeaderComponent} from './article-view-header/article-view-header.component';
import {ArticleViewFooterComponent} from './article-view-footer/article-view-footer.component';
import {MomentModule} from 'ngx-moment';
import {ArticleViewTextComponent} from './article-view-text/article-view-text.component';

@NgModule({
  declarations: [ArticleViewComponent, ArticleViewHeaderComponent, ArticleViewFooterComponent, ArticleViewTextComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MomentModule
  ]
})
export class ArticlesModule {
}
