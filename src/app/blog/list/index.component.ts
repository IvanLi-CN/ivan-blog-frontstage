import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ArticleSummary} from '../articles/models/article-summary.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  articles$: Observable<ArticleSummary[]> = null;

  constructor(
    private readonly articlesService: ArticlesService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.articles$ = this.articlesService.queryArticles({});
    // document.addEventListener('')
  }

  async gotoArticleView(slug: any) {
    await this.router.navigate(['articles', slug]);
  }
}
