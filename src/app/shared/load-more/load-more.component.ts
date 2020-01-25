import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {QueryBaseDto} from '../dtos/query-base.dto';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.styl']
})
export class LoadMoreComponent implements OnInit, OnDestroy {

  @ViewChild('button', {read: ElementRef, static: true})
  button: ElementRef;
  @Input()
  fetchData = (async (conditions: QueryBaseDto) => {
    console.warn('fetch data');
    await new Promise(resolve => setTimeout(resolve, 1000));
  });
  private isFinished = false;
  private buttonIO: IntersectionObserver;
  private isLoading = false;
  private pageIndex = 1;

  constructor() {
  }

  get buttonText(): string {
    if (this.isLoading) {
      return '玩命加载中...';
    }
    if (this.isFinished) {
      return '加载';
    }
    return '查看更多';
  }

  ngOnInit() {
    const io = new IntersectionObserver((entry) => {
      if (entry[0]?.isIntersecting) {
        this.loadMore();
      }
    }, {
      // threshold: [0],
      rootMargin: '100% 0px',
    });
    io.observe(this.button.nativeElement);
    this.loadMore();
  }

  loadMore($event?: MouseEvent) {
    $event?.preventDefault();
    if (this.isFinished) {
      return;
    }
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.fetchData({pageIndex: this.pageIndex, pageSize: 10}).then(() => {
      this.pageIndex++;
    }).finally(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.buttonIO.unobserve(this.button.nativeElement);
  }
}
