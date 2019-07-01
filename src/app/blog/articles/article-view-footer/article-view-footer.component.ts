import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article.model';
import {ArticleSummary} from '../models/article-summary.model';

@Component({
  selector: 'app-article-view-footer',
  templateUrl: './article-view-footer.component.html',
  styleUrls: ['./article-view-footer.component.styl']
})
export class ArticleViewFooterComponent implements OnInit {
  @Input()
  article: Article | ArticleSummary;

  constructor() {
  }

  ngOnInit() {
  }

}
