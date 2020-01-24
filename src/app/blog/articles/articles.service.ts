import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {QueryArticlesParamsDto} from './dtos/query-articles-params.dto';
import {map} from 'rxjs/operators';
import {ArticleSummary} from './models/article-summary.model';
import {QueryArticleParamsDto} from './dtos/query-article-params.dto';
import {Article} from './models/article.model';

const GetArticlesQuery = gql`
  query articles($pageSize: Int, $pageIndex: Int, $title: String) {
    articles(
      pageSize: $pageSize,
      pageIndex: $pageIndex,
      title: $title,
    ) {
      title,
      id,
      slug,
      summary,
      publishedAt,
      tags {
        id,
        name,
      },
    }
  }
`;
const GetArticleQuery = gql`
  query article($slug: String, $id: Int, $title: String) {
    article(
      id: $id,
      slug: $slug,
      title: $title,
    ) {
      title,
      slug,
      id,
      summary,
      htmlContent,
      publishedAt,
      tags {
        id,
        name,
      },
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private readonly http: HttpClient,
    private readonly apollo: Apollo,
  ) {
  }

  queryArticles(params: QueryArticlesParamsDto) {
    return this.apollo.watchQuery<{ articles: Array<ArticleSummary> }, QueryArticlesParamsDto>({
      query: GetArticlesQuery,
      variables: params,
    }).valueChanges.pipe(map(res => res.data.articles));
  }

  queryArticle(params: QueryArticleParamsDto) {
    return this.apollo.watchQuery<{ article: Article }, QueryArticleParamsDto>({
      query: GetArticleQuery,
      errorPolicy: 'ignore',
      variables: params,
    }).valueChanges.pipe(
      map(res => res.data && res.data.article));
  }
}
