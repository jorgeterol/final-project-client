import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTorrentComponent } from './movie-torrent.component';

describe('MovieTorrentComponent', () => {
  let component: MovieTorrentComponent;
  let fixture: ComponentFixture<MovieTorrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTorrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTorrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
