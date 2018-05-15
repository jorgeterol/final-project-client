import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSendCommentsComponent } from './movie-send-comments.component';

describe('MovieSendCommentsComponent', () => {
  let component: MovieSendCommentsComponent;
  let fixture: ComponentFixture<MovieSendCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSendCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSendCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
