import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-article-view-text',
  templateUrl: './article-view-text.component.html',
  styleUrls: ['./article-view-text.component.styl']
})
export class ArticleViewTextComponent implements OnInit {
  @Input()
  article: Article;

  constructor() {
  }

  ngOnInit() {
  }

}
