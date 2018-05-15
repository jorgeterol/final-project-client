import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDisplayCommentsComponent } from './movie-display-comments.component';

describe('MovieDisplayCommentsComponent', () => {
  let component: MovieDisplayCommentsComponent;
  let fixture: ComponentFixture<MovieDisplayCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDisplayCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDisplayCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
