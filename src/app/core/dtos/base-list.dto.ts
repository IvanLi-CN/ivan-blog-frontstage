import {BaseRecordDto} from './base-record.dto';

export class BaseListDto<T = BaseRecordDto> {
  records: T[] = [];
  count = 0;
}
