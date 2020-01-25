import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleViewComponent} from './article-view/article-view.component';
import {IndexComponent} from './index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: ':slug',
    component: ArticleViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {
}
