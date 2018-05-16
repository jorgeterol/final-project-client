import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSendCommentsComponent } from './show-send-comments.component';

describe('ShowSendCommentsComponent', () => {
  let component: ShowSendCommentsComponent;
  let fixture: ComponentFixture<ShowSendCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSendCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSendCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
