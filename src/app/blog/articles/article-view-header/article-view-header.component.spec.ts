import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleViewHeaderComponent} from './article-view-header.component';

describe('ArticleViewHeaderComponent', () => {
  let component: ArticleViewHeaderComponent;
  let fixture: ComponentFixture<ArticleViewHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleViewHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
