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
  comments: any;
  noUserFound: boolean;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.noUserFound = false;
    this.route.params.subscribe((params) => {
      this.username = params.username;
      this.profileService.getProfile(this.username)
      .then((user) => {
        if (user === null) {
          this.noUserFound = true;
          return;
        }
        this.user = user;
        this.movies = user.movies;
        this.shows = user.shows;
        this.comments = user.comments;
      });
    });
  }

}
