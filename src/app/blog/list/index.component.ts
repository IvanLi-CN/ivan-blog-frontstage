import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {Router} from '@angular/router';
import {ArticleSummary} from '../articles/models/article-summary.model';
import {QueryArticlesParamsDto} from '../articles/dtos/query-articles-params.dto';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  articles: ArticleSummary[] = [];

  constructor(
    private readonly articlesService: ArticlesService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    // document.addEventListener('')
  }

  async gotoArticleView(slug: any) {
    await this.router.navigate(['articles', slug]);
  }

  fetchData = async (conditions: QueryArticlesParamsDto) => {
    const articles = await this.articlesService.queryArticles(conditions).pipe(
      take(1),
    ).toPromise();
    this.articles.push(...articles);
  };
}
