import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleViewComponent} from './article-view/article-view.component';

const routes: Routes = [
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
