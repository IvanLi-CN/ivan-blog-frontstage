import {Component, Input, OnInit} from '@angular/core';
import {ArticleSummary} from '../models/article-summary.model';

@Component({
  selector: 'app-article-preview-card',
  templateUrl: './article-preview-card.component.html',
  styleUrls: ['./article-preview-card.component.styl']
})
export class ArticlePreviewCardComponent implements OnInit {
  @Input()
  article: ArticleSummary;

  constructor() {
  }

  ngOnInit() {
  }

}
