import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {QueryArticlesParamsDto} from './dtos/query-articles-params.dto';
import {map} from 'rxjs/operators';
import {QueryArticleParamsDto} from './dtos/query-article-params.dto';
import {Article} from './models/article.model';
import {BaseListDto} from '../../core/dtos/base-list.dto';
import {BaseRecordDto} from '../../core/dtos/base-record.dto';
import {Observable} from 'rxjs';

const GetArticlesQuery = gql`
  query articles($pageSize: Int, $pageIndex: Int, $title: String, $createdAtOrderBy: String) {
    records: articles(
      pageSize: $pageSize,
      pageIndex: $pageIndex,
      title: $title,
      createdAtOrderBy: $createdAtOrderBy,
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
    },
    count: articlesCount(
      pageSize: $pageSize,
      pageIndex: $pageIndex,
      title: $title,
      createdAtOrderBy: $createdAtOrderBy,
    )
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

  queryArticlesAndCount(params: QueryArticlesParamsDto): Observable<BaseListDto<BaseRecordDto>> {
    return this.apollo.watchQuery<BaseListDto, QueryArticlesParamsDto>({
      query: GetArticlesQuery,
      variables: params,
    }).valueChanges.pipe(map(res => res.data));
  }

  queryArticle(params: QueryArticleParamsDto) {
    return this.apollo.watchQuery<{ article: Article }, QueryArticleParamsDto>({
      query: GetArticleQuery,
      errorPolicy: 'ignore',
      variables: params,
    }).valueChanges.pipe(
      map(res => res.data?.article));
  }
}
