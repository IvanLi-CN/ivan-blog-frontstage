import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalStatusComponent} from './personal-status.component';

describe('PersonalStatusComponent', () => {
  let component: PersonalStatusComponent;
  let fixture: ComponentFixture<PersonalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalStatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
