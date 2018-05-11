import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieResultPageComponent } from './movie-result-page.component';

describe('MovieResultPageComponent', () => {
  let component: MovieResultPageComponent;
  let fixture: ComponentFixture<MovieResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieResultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
