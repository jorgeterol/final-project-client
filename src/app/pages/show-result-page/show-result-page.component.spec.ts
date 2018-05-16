import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResultPageComponent } from './show-result-page.component';

describe('ShowResultPageComponent', () => {
  let component: ShowResultPageComponent;
  let fixture: ComponentFixture<ShowResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowResultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
