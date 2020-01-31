import {QueryBaseDto} from '../../../core/dtos/query-base.dto';

export class QueryArticlesParamsDto extends QueryBaseDto {
  title?: string;
  createdAtOrderBy = 'DESC';
}
