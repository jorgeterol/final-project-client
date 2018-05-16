import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  username: string;
  user: any;
  movies: any;
  shows: any;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.username = params.username;
      this.profileService.getProfile(this.username)
      .then((user) => {
        this.user = user;
        this.movies = user.movies;
        this.shows = user.shows;
      });
    });
  }

}
