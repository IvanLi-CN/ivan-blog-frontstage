import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {shareReplay, switchMap, tap} from 'rxjs/operators';
import {ArticlesService} from '../articles.service';
import {Observable} from 'rxjs';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.styl']
})
export class ArticleViewComponent implements OnInit {
  article$: Observable<Article>;

  article: Article;
  isLoading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articlesService: ArticlesService,
  ) {
  }

  ngOnInit() {
    this.article$ = this.route.params.pipe(
      tap(_ => this.isLoading = true),
      switchMap(params => this.articlesService.queryArticle(params)),
      tap(_ => this.isLoading = false),
      shareReplay(1),
    );
    this.article$.subscribe(
      article => {
        this.article = article;
      },
    );
  }

}
