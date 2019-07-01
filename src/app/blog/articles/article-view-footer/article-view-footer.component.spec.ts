import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleViewFooterComponent} from './article-view-footer.component';

describe('ArticleViewFooterComponent', () => {
  let component: ArticleViewFooterComponent;
  let fixture: ComponentFixture<ArticleViewFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleViewFooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleViewFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
