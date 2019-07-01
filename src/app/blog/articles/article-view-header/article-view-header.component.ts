import {Component, Input, OnInit} from '@angular/core';
import {ArticleSummary} from '../models/article-summary.model';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-article-view-header',
  templateUrl: './article-view-header.component.html',
  styleUrls: ['./article-view-header.component.styl']
})
export class ArticleViewHeaderComponent implements OnInit {
  @Input()
  article: Article | ArticleSummary;

  constructor() {
  }

  ngOnInit() {
  }

}
