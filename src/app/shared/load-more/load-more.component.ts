import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {QueryBaseDto} from '../../core/dtos/query-base.dto';
import {combineLatest, from, Observable, of, Subject} from 'rxjs';
import {catchError, distinct, filter, map, pluck, scan, shareReplay, startWith, switchMap, takeUntil, tap} from 'rxjs/operators';
import {BaseRecordDto} from '../../core/dtos/base-record.dto';
import {BaseListDto} from '../../core/dtos/base-list.dto';
import {INFINITE_PAGE_SIZE} from '../../core/dtos/constants/pagination.constant';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.styl']
})
export class LoadMoreComponent<ListItemType extends BaseRecordDto = BaseRecordDto,
  ListType extends BaseListDto<ListItemType> = BaseListDto<ListItemType>,
  > implements OnInit, OnDestroy {

  @Input()
  fetchData = (async (conditions: QueryBaseDto): Promise<ListType> => {
    console.warn('fetch data');
    await new Promise(resolve => setTimeout(resolve, 1000));
    return new BaseListDto<BaseRecordDto>() as ListType;
  });
  public readonly records$: Observable<ListItemType[]>;
  public readonly listRes$: Observable<ListType>;
  public readonly listCount$: Observable<number>;
  @ViewChild('button', {read: ElementRef, static: true})
  private readonly button: ElementRef;
  private isFinished = false;
  private buttonIO: IntersectionObserver;
  private isLoading = false;
  private pageIndex = 1;
  private readonly loadMore$ = new Subject<void>();
  private readonly pageSize = INFINITE_PAGE_SIZE;
  private readonly isFinished$: Observable<boolean>;
  private readonly destroyed$ = new Subject<void>();

  constructor() {
    this.listRes$ = this.getListRes$();
    this.records$ = this.getRecords$();
    this.listCount$ = this.getListCount$();
    this.isFinished$ = this.getIsFinished$();

    this.isFinished$.subscribe(v => this.isFinished = v);

    this.destroyed$.subscribe(() => this.buttonIO.unobserve(this.button.nativeElement));
  }

  get buttonText(): string {
    if (this.isLoading) {
      return '玩命加载中...';
    }
    if (this.isFinished) {
      return '我是有底线的';
    }
    return '查看更多';
  }

  ngOnInit() {
    this.buttonIO = new IntersectionObserver((entry) => {
      if (entry[0]?.isIntersecting) {
        this.loadMore();
      }
    }, {
      // threshold: [0],
      rootMargin: '100% 0px',
    });
    this.buttonIO.observe(this.button.nativeElement);
    this.loadMore();
  }

  loadMore($event?: MouseEvent) {
    $event?.preventDefault();
    this.loadMore$.next();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  getListRes$(): Observable<ListType> {
    return this.loadMore$.pipe(
      takeUntil(this.destroyed$),
      takeUntil(of(null).pipe(switchMap(() => this.isFinished$.pipe(filter(v => v))))),
      tap(() => this.isLoading = true),
      map<void, QueryBaseDto>(() => ({pageIndex: this.pageIndex, pageSize: 10})),
      switchMap(conditions => from(this.fetchData(conditions))),
      tap(({count}) => this.pageIndex++),
      catchError(err => {
        console.warn(err);
        return of();
      }),
      tap(() => this.isLoading = false),
      shareReplay(),
    ) as Observable<ListType>;
  }

  getRecords$() {
    return this.listRes$.pipe(
      switchMap<ListType, Observable<ListItemType>>(list => from(list.records)),
      distinct(record => record.id),
      scan<ListItemType>((acc, value) => [...acc, value], []),
      shareReplay(),
    ) as Observable<ListItemType[]>;
  }

  private getIsFinished$() {
    return combineLatest(
      this.listCount$,
      this.records$.pipe(pluck('length')),
    ).pipe(
      map(([totalCount, currCount]) => totalCount <= currCount),
      startWith(false),
      shareReplay(),
    );
  }

  private getListCount$() {
    return this.listRes$.pipe(
      pluck('count'),
      shareReplay(),
    ) as Observable<number>;
  }
}
