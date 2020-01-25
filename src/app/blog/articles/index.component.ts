import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticlesService} from './articles.service';
import {Router} from '@angular/router';
import {ArticleSummary} from './models/article-summary.model';
import {QueryArticlesParamsDto} from './dtos/query-articles-params.dto';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LoadMoreComponent} from '../../shared/load-more/load-more.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  @ViewChild('loadMore', {static: false})
  loadMore: LoadMoreComponent;

  constructor(
    private readonly articlesService: ArticlesService,
    private readonly router: Router,
  ) {
  }

  fetchData = (async (conditions: QueryArticlesParamsDto) => {
    return await this.articlesService.queryArticlesAndCount(conditions).pipe(
      take(1),
    ).toPromise();
    // this.articles.push(...articles);
  });

  get articles$(): Observable<ArticleSummary[]> {
    return this.loadMore?.records$ as any;
  }

  ngOnInit() {
    // document.addEventListener('')
  }

  async gotoArticleView(slug: any) {
    await this.router.navigate(['articles', slug]);
  }
}
