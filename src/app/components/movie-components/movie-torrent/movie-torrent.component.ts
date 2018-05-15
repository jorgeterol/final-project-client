import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-torrent',
  templateUrl: './movie-torrent.component.html',
  styleUrls: ['./movie-torrent.component.scss']
})
export class MovieTorrentComponent implements OnInit {

  @Input() movies: any;
  @Input() torrents: any;

  @Output() submitbackcomponent: EventEmitter<any> = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.submitbackcomponent.emit();
  }

}
