import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleViewTextComponent} from './article-view-text.component';

describe('ArticleViewTextComponent', () => {
  let component: ArticleViewTextComponent;
  let fixture: ComponentFixture<ArticleViewTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleViewTextComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleViewTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
