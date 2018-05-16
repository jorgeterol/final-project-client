import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDisplayCommentsComponent } from './show-display-comments.component';

describe('ShowDisplayCommentsComponent', () => {
  let component: ShowDisplayCommentsComponent;
  let fixture: ComponentFixture<ShowDisplayCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDisplayCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDisplayCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
